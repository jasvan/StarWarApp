async function register ( imput )
{
     const newUser = input;
     newUser.email = newUser.email.toLowerCase();
     newUser.usename = newUser.username.toLowerCase();

     const { email, username, password } = newUser;
     //resolvemos si el email esta en uso
     const foundEmail = await User.findOne({ email });
     if (foundEmail) throw new Error("El email ya esta en uso");

     const foundUsername = await User.findOne({ username });
     if (foundUsername) throw new Error("El nombre de usuario ya esta en uso");

     // encriptar

     try {
       const user = new User(newUser);
       user.save();
       return user;
     } catch (error) {
       console.log(error);
     }
}