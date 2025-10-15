import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
    selector: 'app-documentation',
    standalone: true,
    imports: [CommonModule],
    template: `
        <div class="card">
            <div class="font-semibold text-2xl mb-6">Documentation</div>
            <div class="font-semibold text-xl mb-6">Get Started</div>
            <p class="text-lg mb-6">Atlantis is an application template for Angular and is distributed as a CLI project. Current versions is Angular v20 with PrimeNG v20. In case CLI is not installed already, use the command below to set it up.</p>
            <pre class="app-code">
<code>npm install -g &#64;angular/cli</code></pre>
            <p class="text-lg mb-6">
                Once CLI is ready in your system, extract the contents of the zip file distribution, cd to the directory, install the libraries from npm and then execute "ng serve" to run the application in your local environment.
            </p>
            <pre class="app-code">
<code>npm install
ng serve</code></pre>

            <p class="text-lg mb-6">
                The application should run at
                <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base">http://localhost:4200/</i>
                to view the application in your local environment.
            </p>

            <div class="font-semibold text-xl mb-6">Structure</div>
            <p class="text-lg mb-6">Templates consists of a couple folders, demos and layout have been separated so that you can easily identify what is necessary for your application.</p>
            <ul class="leading-normal list-disc pl-8 text-lg mb-4">
                <li><span class="text-primary font-medium">src/app/layout</span>: Main layout files, required.</li>
                <li><span class="text-primary font-medium">src/app/pages</span>: Demo pages like Dashboard, optional.</li>
                <li><span class="text-primary font-medium">public/demo/</span>: Public asssets used in demos, optional.</li>
                <li><span class="text-primary font-medium">public/layout/</span>: Public asssets used for the main layout, required.</li>
                <li><span class="text-primary font-medium">src/assets/demo</span>: Resources used in demos, optional.</li>
                <li><span class="text-primary font-medium">src/assets/layout</span>: Resources of the main layout, required.</li>
            </ul>

            <div class="font-semibold text-xl mb-6">Menu</div>
            <p class="text-lg mb-6">
                Main menu is defined at
                <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/app/layout/components/app.menu.ts</span>
                file. Update the
                <i class="bg-highlight px-2 py-1 rounded-border not-italic text-base">model</i>
                property to define your own menu items.
            </p>

            <div class="font-semibold text-xl mb-6">Layout Service</div>
            <p class="text-lg mb-6">
                <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/app/layout/service/layout.service.ts</span>
                is a service that manages layout state changes, including dark mode, PrimeNG theme, menu modes, and states.
            </p>

            <div class="font-semibold text-xl mb-6">Tailwind CSS</div>
            <p class="text-lg mb-6">The demo pages are developed with Tailwind CSS however the core application shell uses custom CSS.</p>

            <div class="font-semibold text-xl mb-6">Variables</div>
            <p class="text-lg mb-6">
                CSS variables used in the template are derived from the applied PrimeNG theme. Customize them through the CSS variables in
                <span class="bg-highlight px-2 py-1 rounded-border not-italic text-base">src/assets/layout/variables</span>.
            </p>
        </div>
    `,
    styles: `
        @media screen and (max-width: 991px) {
            .video-container {
                position: relative;
                width: 100%;
                height: 0;
                padding-bottom: 56.25%;

                iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    `
})
export class Documentation {}
