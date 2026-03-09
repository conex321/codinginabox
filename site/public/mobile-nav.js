/**
 * Mobile Navigation — CodingInABox
 * Auto-injects a hamburger menu + slide-out panel into every page.
 */
(function () {
    'use strict';

    // Detect if we're in a subdirectory (product pages)
    const isSubDir = window.location.pathname.includes('/products/');
    const prefix = isSubDir ? '../' : '';

    const NAV_LINKS = [
        { label: 'Home', href: prefix + 'index.html' },
        {
            label: 'Kits', href: prefix + 'products.html', children: [
                { label: 'Robot Car V4', href: prefix + 'products/robot-car.html' },
                { label: 'Anti-Aircraft Gun', href: prefix + 'products/anti-aircraft-gun.html' },
                { label: 'Laser Shooting Target', href: prefix + 'products/laser-shooting-target.html' },
                { label: 'Smart Water Dispenser', href: prefix + 'products/smart-water-dispenser.html' },
                { label: 'Solar Light Tracker', href: prefix + 'products/solar-light-tracker.html' },
                { label: 'Titan Arm 6-Axis', href: prefix + 'products/robot-arm.html' },
                { label: 'Mini Drone X-2', href: prefix + 'products/mini-drone.html' },
            ]
        },
        { label: 'Courses', href: prefix + 'courses.html' },
        { label: 'Competitions', href: prefix + 'competitions.html' },
        { label: 'About', href: prefix + 'about.html' },
        { label: 'Contact', href: prefix + 'contact.html' },
    ];

    function init() {
        const nav = document.querySelector('nav') || document.querySelector('header');
        if (!nav) return;

        const container = nav.querySelector('.max-w-\\[1400px\\]') || nav.firstElementChild;
        if (!container) return;

        // ──── Hamburger Button ────
        const hamburger = document.createElement('button');
        hamburger.id = 'mobile-hamburger';
        hamburger.setAttribute('aria-label', 'Open menu');
        hamburger.innerHTML = `
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
      <span class="hamburger-bar"></span>
    `;
        container.appendChild(hamburger);

        // ──── Overlay ────
        const overlay = document.createElement('div');
        overlay.id = 'mobile-overlay';
        document.body.appendChild(overlay);

        // ──── Mobile Panel ────
        const panel = document.createElement('div');
        panel.id = 'mobile-panel';

        const panelHeader = document.createElement('div');
        panelHeader.className = 'mobile-panel-header';

        const closeBtn = document.createElement('button');
        closeBtn.id = 'mobile-close';
        closeBtn.setAttribute('aria-label', 'Close menu');
        closeBtn.innerHTML = '✕';
        panelHeader.appendChild(closeBtn);
        panel.appendChild(panelHeader);

        const linkList = document.createElement('ul');
        linkList.className = 'mobile-link-list';

        NAV_LINKS.forEach(function (item) {
            const li = document.createElement('li');

            if (item.children) {
                // Accordion parent
                const toggle = document.createElement('button');
                toggle.className = 'mobile-accordion-toggle';
                toggle.innerHTML = item.label + ' <span class="accordion-arrow">▸</span>';

                const subList = document.createElement('ul');
                subList.className = 'mobile-sub-list';

                // Parent link
                const parentLi = document.createElement('li');
                const parentA = document.createElement('a');
                parentA.href = item.href;
                parentA.textContent = 'View All Kits';
                parentA.className = 'mobile-sub-link mobile-sub-link--parent';
                parentLi.appendChild(parentA);
                subList.appendChild(parentLi);

                item.children.forEach(function (child) {
                    const childLi = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = child.href;
                    a.textContent = child.label;
                    a.className = 'mobile-sub-link';
                    childLi.appendChild(a);
                    subList.appendChild(childLi);
                });

                toggle.addEventListener('click', function () {
                    const isOpen = subList.classList.contains('open');
                    subList.classList.toggle('open');
                    toggle.querySelector('.accordion-arrow').textContent = isOpen ? '▸' : '▾';
                });

                li.appendChild(toggle);
                li.appendChild(subList);
            } else {
                const a = document.createElement('a');
                a.href = item.href;
                a.textContent = item.label;
                a.className = 'mobile-nav-link';
                li.appendChild(a);
            }

            linkList.appendChild(li);
        });

        panel.appendChild(linkList);

        // CTA at bottom
        const ctaWrap = document.createElement('div');
        ctaWrap.className = 'mobile-cta-wrap';
        const cta = document.createElement('a');
        cta.href = prefix + 'contact.html';
        cta.className = 'mobile-cta-btn';
        cta.textContent = 'Get Started';
        ctaWrap.appendChild(cta);
        panel.appendChild(ctaWrap);

        document.body.appendChild(panel);

        // ──── Event Listeners ────
        function openMenu() {
            panel.classList.add('open');
            overlay.classList.add('open');
            hamburger.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            panel.classList.remove('open');
            overlay.classList.remove('open');
            hamburger.classList.remove('active');
            document.body.style.overflow = '';
        }

        hamburger.addEventListener('click', function () {
            if (panel.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        closeBtn.addEventListener('click', closeMenu);
        overlay.addEventListener('click', closeMenu);

        // Close on ESC
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') closeMenu();
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
