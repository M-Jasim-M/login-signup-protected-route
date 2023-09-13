// const express = require('express');
// const passport = require('passport');
// const FacebookStrategy = require('passport-facebook').Strategy;
// const session = require('express-session');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());
// app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect('mongodb+srv://jasimwazir098:khan!!!@cluster0.bbx0tzz.mongodb.net/facebooksignin', { useNewUrlParser: true, useUnifiedTopology: true });

// console.log("mongoose connected successfully")

// // Define Mongoose schema for User
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   image: String,
// });

// const User = mongoose.model('User', userSchema);

// // Configure Facebook OAuth2 Strategy
// passport.use(
//     new FacebookStrategy(
//       {
//         clientID: '198481959782373',
//         clientSecret: '49251a8abafa33e96eeec32d9148fa65',
//         callbackURL: 'http://localhost:3000/auth/facebook/callback',
//         profileFields: ['id', 'displayName', 'photos', 'emails'],
//       },
//       (accessToken, refreshToken, profile, done) => {
//         try {
//           // Extract data from the profile object with fallback values
//           const name = profile.displayName || 'No Name';
//           const email = (profile.emails && profile.emails.length > 0) ? profile.emails[0].value : 'No Email';
//           const image = (profile.photos && profile.photos.length > 0) ? profile.photos[0].value : '';
  
//           // Log user data and tokens
//           console.log('Received user data from Facebook:');
//           console.log('Name:', name);
//           console.log('Email:', email);
//           console.log('Image:', image);
//           console.log('Access Token:', accessToken);
//           console.log('Refresh Token:', refreshToken);
  
//           User.findOne({ email }).then((existingUser) => {
//             if (existingUser) {
//               done(null, existingUser);
//             } else {
//               const newUser = new User({
//                 name,
//                 email,
//                 image,
//               });
//               newUser.save().then((user) => {
//                 done(null, user);
//               });
//             }
//           });
//         } catch (error) {
//           done(error, null);
//         }
//       }
//     )
//   );
  
  

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//     try {
//       const user = await User.findById(id);
//       done(null, user);
//     } catch (err) {
//       done(err, null);
//     }
//   });
  

// // Define routes
// app.get('/', (req, res)=>{
// res.send("working and its fine")
// })

// app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

// app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
//   // Successful authentication, redirect as needed.
//   res.redirect('http://localhost:3001/dashboard');
// });

// // const authenticateUser = (req, res, next) => {
// //   const token = req.headers.authorization;

// //   if (!token || !validateToken(token)) {
// //     // Token is missing or invalid
// //     return res.status(401).json({ message: 'Unauthorized' });
// //   }

// //   // Token is valid, continue to the next middleware
// //   next();
// // };
// app.get('/api/user', async (req, res) => {
//   try {
//     // Replace with your own logic to retrieve user data from your database
//     const userData = await User.findOne({ /* Your query criteria */ });

//     if (!userData) {
//       return res.status(404).json({ message: 'User not found' });
//     }

//     // Send user data as JSON response to the frontend
//     res.json({ userData });
//   } catch (error) {
//     console.error('Error fetching user data:', error);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });



// // app.get('/profile', (req, res) => {
// //   if (req.isAuthenticated()) {
// //     // User is authenticated, you can send the user data here
// //     res.json(req.user);
// //   } else {
// //     // User is not authenticated, handle it accordingly
// //     res.redirect('/');
// //   }
// // });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });



const express = require('express');
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb+srv://jasimwazir098:khan!!!@cluster0.bbx0tzz.mongodb.net/facebooksignin', { useNewUrlParser: true, useUnifiedTopology: true });

console.log("mongoose connected successfully")

// Define Mongoose schema for User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  facebookAccessToken: String, // Add a field to store the Facebook access token
});

const User = mongoose.model('User', userSchema);

// Configure Facebook OAuth2 Strategy
passport.use(
  new FacebookStrategy(
    {
      clientID: '198481959782373',
      clientSecret: '49251a8abafa33e96eeec32d9148fa65',
      callbackURL: 'http://localhost:3000/auth/facebook/callback',
      profileFields: ['id', 'displayName', 'photos', 'emails'],
    },
    (accessToken, refreshToken, profile, done) => {
      try {
        // Extract data from the profile object with fallback values
        const name = profile.displayName || 'No Name';
        const email = (profile.emails && profile.emails.length > 0) ? profile.emails[0].value : 'No Email';
        const image = (profile.photos && profile.photos.length > 0) ? profile.photos[0].value : '';

        // Log user data and tokens
        console.log('Received user data from Facebook:');
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Image:', image);
        console.log('Access Token:', accessToken);
        console.log('Refresh Token:', refreshToken);

        User.findOne({ email }).then((existingUser) => {
          if (existingUser) {
            // Update the Facebook access token
            existingUser.facebookAccessToken = accessToken;
            existingUser.save().then((user) => {
              done(null, user);
            });
          } else {
            const newUser = new User({
              name,
              email,
              image,
              facebookAccessToken: accessToken,
            });
            newUser.save().then((user) => {
              done(null, user);
            });
          }
        });
      } catch (error) {
        done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

// Define routes
app.get('/', (req, res) => {
  res.send("Working and it's fine");
});

app.get('/auth/facebook', passport.authenticate('facebook', { scope: ['email'] }));

app.get('/auth/facebook/callback', passport.authenticate('facebook', { failureRedirect: '/' }), (req, res) => {
  // Successful authentication, redirect as needed.
  res.redirect('http://localhost:3001/dashboard');
});

app.get('/api/user', async (req, res) => {
  try {
    // Replace with your own logic to retrieve user data from your database
    const userData = await User.findOne({ /* Your query criteria */ });

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send user data and access token as JSON response to the frontend
    res.json({ userData, accessToken: userData.facebookAccessToken });
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

