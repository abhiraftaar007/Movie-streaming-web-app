export async function signup(req,res) {
    // res.send("Signup route");
    try {
        const {email, password, username} = req.body;
        if(!email || !password || !username){
            return res.status(400).json({success:false, message:"All fields are required"})
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    } catch (error) {
        
    }
}

export async function login(req,res) {
    res.send("Login route");
}

export async function logout(req,res) {
    res.send("Logout route");
}