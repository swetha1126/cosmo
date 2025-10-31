const express = require("express")
const cors = require("cors")
const bcrypt = require("bcrypt");

const app =express()
const port=6005

app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send("Welcome hello");
})



const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://swethaswe110226:Swe%4110226cluster0.uf0i8ds.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let usersCollection;

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    const db= client.db("accessories");
    usersCollection=db.collection("user")
  } catch(error){
    console.error(error);
    // Ensures that the client will close when you finish/error
    //await client.close();
  }
}
run();

app.post("/register", async (req, res) => {
        try {
          const { name, email, password } = req.body;
          console.log(name, email,password," inside upload")

          if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: "All fields are required" });
          }

          const existingUser = await usersCollection.findOne({ email });
          if (existingUser) {
            return res.status(409).json({ success: false, message: "User already exists" });
          }

          // 🔐 Hash the password
          const hashedPassword = await bcrypt.hash(password, 10);

          const result = await usersCollection.insertOne({
            name,
            email,
            password: hashedPassword
          });

          res.status(201).json({ success: true, message: "User registered", userId: result.insertedId });

        } catch (error) {
          console.error("Error in /register:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });

      app.post("/login", async (req, res) => {
        try {
          const { email, password } = req.body;
          if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password required" });
          }

          const user = await usersCollection.findOne({ email });
          if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          res.status(200).json({ success: true, message: "Login successful", user: { name: user.name, email: user.email,_id:user._id } });

        } catch (error) {
          console.error("Error in /login:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });


       app.post("/login", async (req, res) => {
        try {
          const { email, password } = req.body;
          if (!email || !password) {
            return res.status(400).json({ success: false, message: "Email and password required" });
          }

          const user = await usersCollection.findOne({ email });
          if (!user) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          const isMatch = await bcrypt.compare(password, user.password);
          if (!isMatch) {
            return res.status(401).json({ success: false, message: "Invalid email or password" });
          }

          res.status(200).json({ success: true, message: "Login successful", user: { name: user.name, email: user.email,_id:user._id } });

        } catch (error) {
          console.error("Error in /login:", error);
          res.status(500).json({ success: false, message: "Server error" });
        }
      });
app.put("/reset-password", async(req,res) =>{
  const { email, newPassword } = req.body;

  if(!email || !newPassword){

    return res.status(400).json({ message: "Email and new password are required."});
  }
    const user = await usersCollection.findOne({ email });
    if(!user) return res.status(404).json({ message: "user not found. "});

  const hashedPassword = await bcrypt.hash(newPassword, 10);
await usersCollection.updateOne(
  { email },
  { $set: { password: hashedPassword }}
);
res.json({ message: "password reset successful"});
});
app.listen(
    port,()=>{
        console.log(`server is running on http://localhost:${port}`);
        
    }
);
