import { NextResponse } from 'next/server';

export function middleware(request) {
    const url = request.nextUrl.clone();
    const pathname = url.pathname;

    console.log('Middleware executed for:', pathname);

    // Exclude Next.js internal paths (_next) and API routes
    if (pathname.startsWith('/_next') || pathname.startsWith('/api')) {
        return NextResponse.next(); // Allow these paths
    }

    // Exclude static files and media assets (e.g., videos, images, fonts)
    const staticFileExtensions = ['.mp4', '.webm', '.jpg', '.png', '.css', '.js'];
    if (staticFileExtensions.some(ext => pathname.endsWith(ext))) {
        return NextResponse.next(); // Allow static files to load
    }

    // Define your valid application routes explicitly
    const validRoutes = ['/aboutus',
        '/', 
        '/services',
        '/contact',
        '/sitemap.xml'
        ]; 

    // If the route is not valid, redirect to the homepage
    if (!validRoutes.includes(pathname)) {
        console.log(`Redirecting from ${pathname} to /`);
        url.pathname = '/';
        return NextResponse.redirect(url, 301); // 308 Redirect
    }

    return NextResponse.next(); // Proceed with other routes
}
