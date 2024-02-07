import { authMiddleware } from "@clerk/nextjs";

export const runtime = 'edge'


export default authMiddleware({
    // publicRoutes: ["/"],
});

export const config = {
    mather: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}