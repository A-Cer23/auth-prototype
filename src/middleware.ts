import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
    // publicRoutes: ["/"],
});

export const config = {
    mather: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"]
}