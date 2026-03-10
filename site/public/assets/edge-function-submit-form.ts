// ══════════════════════════════════════════════════════════
// CodingInABox — Supabase Edge Function: submit-form
// Deploy this via Supabase CLI: supabase functions deploy submit-form
// ══════════════════════════════════════════════════════════

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

        const supabaseUrl = Deno.env.get("SUPABASE_URL") || "";
        const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "";
        const supabase = createClient(supabaseUrl, supabaseKey);

        const { data, error } = await supabase.from("signups").insert({
            first_name,
            last_name,
            email,
            subject: subject || null,
            message: message || null,
            signup_type: signup_type || "contact",
            selected_courses: selected_courses || null,
            subscription_tier: subscription_tier || null,
        }).select();

        if (error) {
            console.error("Supabase insert error:", error);
            return new Response(
                JSON.stringify({ error: "Failed to save submission. Please try again." }),
                { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
            );
        }

        // Send confirmation email via SendGrid (if API key configured)
        const sendgridKey = Deno.env.get("SENDGRID_API_KEY");
        if (sendgridKey) {
            try {
                const emailBody = {
                    personalizations: [{ to: [{ email }] }],
                    from: { email: "noreply@codinginabox.com", name: "CodingInABox" },
                    subject: signup_type === "course_enrollment"
                        ? "Welcome to CodingInABox — Course Enrollment Confirmed!"
                        : "Thanks for contacting CodingInABox!",
                    content: [{
                        type: "text/html",
                        value: signup_type === "course_enrollment"
                            ? `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#050B1A;color:#e2e8f0;padding:40px;border:1px solid #00F0FF">
                  <h1 style="color:#00F0FF;font-size:24px">Welcome, ${first_name}!</h1>
                  <p>Your course enrollment has been received. Our team will reach out within 24 hours.</p>
                  ${selected_courses ? `<p><strong>Selected Courses:</strong> ${selected_courses.join(", ")}</p>` : ""}
                  ${subscription_tier ? `<p><strong>Plan:</strong> ${subscription_tier}</p>` : ""}
                  <p style="margin-top:20px;color:#94a3b8;font-size:12px">— The CodingInABox Team</p>
                </div>`
                            : `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;background:#050B1A;color:#e2e8f0;padding:40px;border:1px solid #00F0FF">
                  <h1 style="color:#00F0FF;font-size:24px">Thanks, ${first_name}!</h1>
                  <p>We received your message and will respond within 24 hours.</p>
                  <p style="margin-top:20px;color:#94a3b8;font-size:12px">— The CodingInABox Team</p>
                </div>`,
                    }],
                };

                await fetch("https://api.sendgrid.com/v3/mail/send", {
                    method: "POST",
                    headers: {
                        Authorization: `Bearer ${sendgridKey}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(emailBody),
                });
            } catch (emailErr) {
                console.error("SendGrid email error:", emailErr);
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
