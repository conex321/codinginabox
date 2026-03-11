import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  try {
    const body = await req.json();
    const { first_name, last_name, email, subject, message, signup_type, selected_courses, subscription_tier } = body;

    if (!first_name || !last_name || !email) {
      return new Response(
        JSON.stringify({ error: "First name, last name, and email are required." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Invalid email format." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Insert into Supabase
    const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
    const supabase = createClient(supabaseUrl, supabaseKey);

    const { error } = await supabase.from("signups").insert({
      first_name,
      last_name,
      email,
      subject: subject || null,
      message: message || null,
      signup_type: signup_type || "contact",
      selected_courses: selected_courses || null,
      subscription_tier: subscription_tier || null,
    });

    if (error) {
      console.error("Supabase insert error:", error);
      return new Response(
        JSON.stringify({ error: "Failed to save submission. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send confirmation email via Resend
    const resendKey = Deno.env.get("RESEND_API_KEY");
    if (resendKey) {
      try {
        const isEnrollment = signup_type === "course_enrollment";
        const htmlContent = isEnrollment
          ? `<div style="font-family:'Inter',Arial,sans-serif;max-width:600px;margin:0 auto;background:#050B1A;color:#e2e8f0;padding:40px;border:1px solid #00F0FF;border-radius:4px">
              <div style="text-align:center;margin-bottom:24px"><img src="https://www.codinginabox.com/logo.svg" alt="CodingInABox" style="height:50px" /></div>
              <h1 style="color:#00F0FF;font-size:24px;margin-bottom:16px">Welcome, ${first_name}! 🚀</h1>
              <p style="color:#94a3b8;line-height:1.6">Your course enrollment has been received. Our team will reach out within 24 hours to set up your learning account.</p>
              ${selected_courses && selected_courses.length > 0 ? `<div style="margin:20px 0;padding:16px;background:rgba(0,240,255,0.05);border:1px solid rgba(0,240,255,0.2);border-radius:4px"><p style="color:#00F0FF;font-size:12px;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px"><strong>Selected Courses</strong></p><p style="color:#e2e8f0">${selected_courses.join(", ")}</p></div>` : ""}
              ${subscription_tier ? `<p style="color:#94a3b8"><strong style="color:#e2e8f0">Plan:</strong> ${subscription_tier === "single" ? "Single Course — $50/mo" : subscription_tier === "bundle_3" ? "3-Course Bundle — $120/mo" : "All-Access Pass — $199/mo"}</p>` : ""}
              <hr style="border:none;border-top:1px solid rgba(0,240,255,0.2);margin:24px 0" />
              <p style="color:#64748b;font-size:12px;text-align:center">— The CodingInABox Team<br/><a href="https://www.codinginabox.com" style="color:#00F0FF">www.codinginabox.com</a></p>
            </div>`
          : `<div style="font-family:'Inter',Arial,sans-serif;max-width:600px;margin:0 auto;background:#050B1A;color:#e2e8f0;padding:40px;border:1px solid #00F0FF;border-radius:4px">
              <div style="text-align:center;margin-bottom:24px"><img src="https://www.codinginabox.com/logo.svg" alt="CodingInABox" style="height:50px" /></div>
              <h1 style="color:#00F0FF;font-size:24px;margin-bottom:16px">Thanks, ${first_name}! ✉️</h1>
              <p style="color:#94a3b8;line-height:1.6">We received your message and will respond within 24 hours.</p>
              <hr style="border:none;border-top:1px solid rgba(0,240,255,0.2);margin:24px 0" />
              <p style="color:#64748b;font-size:12px;text-align:center">— The CodingInABox Team<br/><a href="https://www.codinginabox.com" style="color:#00F0FF">www.codinginabox.com</a></p>
            </div>`;

        const emailRes = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${resendKey}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: "CodingInABox <noreply@noreply.codinginabox.com>",
            to: [email],
            subject: isEnrollment
              ? "Welcome to CodingInABox — Enrollment Confirmed! 🚀"
              : "Thanks for contacting CodingInABox! ✉️",
            html: htmlContent,
          }),
        });

        const emailData = await emailRes.json();
        if (!emailRes.ok) {
          console.error("Resend email error:", emailData);
        } else {
          console.log("Email sent:", emailData.id);
        }
      } catch (emailErr) {
        console.error("Email send error:", emailErr);
      }
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: signup_type === "course_enrollment"
          ? "Course enrollment submitted! Check your email for confirmation."
          : "Message sent! We'll get back to you within 24 hours.",
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Unexpected error:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
