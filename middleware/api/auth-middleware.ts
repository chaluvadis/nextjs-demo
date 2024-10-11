const validateToken = (token: any): boolean => {
    return !!token;
};
export function authMiddlware(req: Request): { isValid: boolean; } {
    const token = req.headers.get("authorization")?.split(" ")[1];
    return {
        isValid: validateToken(token)
    };
}