import { authMiddleware } from "@clerk/nextjs";
 
export default authMiddleware({
      ignoredRoutes: ['/', '/dashboard-de-usuario',/^\/chicas\/[\w-]+$/, '/reportar', '/(api|trpc)(.*)'],
      publicRoutes: ['/', '/dashboard-de-usuario',/^\/chicas\/[\w-]+$/, '/reportar', '/(api|trpc)(.*)'],
      
});
 
export const config = {
      matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};

// export const config = {
//     matcher: [
//         '/crear-anuncio',
//         '/dashboard',
//         '/api'
//     ],
// };
