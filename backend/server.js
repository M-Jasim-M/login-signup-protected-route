// const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const session = require('express-session');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Configure session middleware
// app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

// // Initialize Passport.js
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://jasimwazir098:khan!!!@cluster0.bbx0tzz.mongodb.net/googlesignin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// console.log('mongoose connected successfully');

// // Define Mongoose schema for User
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   image: String,
// });

// const User = mongoose.model('User', userSchema);

// // Configure Google OAuth2 Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: '244877137927-6m2q888noq6d3mb7q6aas7d73nmoh0ln.apps.googleusercontent.com',
//       clientSecret: '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',
//       callbackURL: 'http://localhost:3000/auth/google/callback', // Update this to match your frontend/backend configuration
//       scope: ['profile', 'email'],
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log('Access Token:', accessToken);
//       console.log('Refresh Token:', refreshToken);
//       console.log('Received user data from Google:');
//       console.log('Name:', profile.displayName);
//       console.log('Email:', profile.emails[0].value);
//       console.log('Image:', profile.photos[0].value);

//       return User.findOne({ email: profile.emails[0].value })
//         .then((existingUser) => {
//           if (existingUser) {
//             return existingUser;
//           } else {
//             const newUser = new User({
//               name: profile.displayName,
//               email: profile.emails[0].value,
//               image: profile.photos[0].value,
//             });
//             console.log("user save");
//             newUser.save()
//               .then((savedUser) => {
//                 done(null, savedUser); // New user saved
//                 console.log("user save")
//               })
//               .catch((error) => {
//                 console.error('Error saving user:', error);
//                 done(error, null);
//               });
//           }
//         })
//         .catch((error) => {
//           console.error('Error finding user:', error);
//           done(error, null);
//         });
//     }
//   )
// );

// // Serialize and deserialize user
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });

// // Initiate Google login
// // Handle Google OAuth2 callback and send user data to the frontend
// // app.get(
// //   '/auth/google',
// //   passport.authenticate('google', {
// //     scope: ['profile', 'email'],
// //   })
// // );
// app.get('/auth/google', (req, res, next) => {
//     console.log('Authenticating with Google...');
//     passport.authenticate('google', {
//       scope: ['profile', 'email'],
//     })(req, res, next);
//   });
  


// app.get('/auth/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   // Successful authentication, redirect to /success route.
//   res.send("success")
// //   res.redirect('./success');
// });

// // Route for sending user data as JSON
// app.get('/success', (req, res) => {
//   if (req.isAuthenticated()) {
//     // User is authenticated, you can send the user data here
//     const userData = {
//       name: req.user.name,
//       email: req.user.email,
//       image: req.user.image,
//     };
//     res.json(userData);
//   } else {
//     // User is not authenticated, handle it accordingly
//     res.redirect('/');
//   }
// });

// // Protected route example
// app.get('/profile', (req, res) => {
//   if (req.isAuthenticated()) {
//     // User is authenticated, you can send the user data here
//     res.json(req.user);
//   } else {
//     // User is not authenticated, handle it accordingly
//     res.redirect('/');
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// const express = require('express');
// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const session = require('express-session');
// const mongoose = require('mongoose');
// const cors = require('cors');

// const app = express();
// app.use(cors());

// // Configure session middleware
// app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

// // Initialize Passport.js
// app.use(passport.initialize());
// app.use(passport.session());

// // Connect to MongoDB
// mongoose.connect('mongodb+srv://jasimwazir098:khan!!!@cluster0.bbx0tzz.mongodb.net/googlesignin', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// console.log('mongoose connected successfully');

// // Define Mongoose schema for User
// const userSchema = new mongoose.Schema({
//   name: String,
//   email: String,
//   image: String,
// });

// const User = mongoose.model('User', userSchema);

// // Configure Google OAuth2 Strategy
// passport.use(
//   new GoogleStrategy(
//     {
//       clientID: '864278402202-n16utitagqpdt047ft0crh17tcaf29be.apps.googleusercontent.com',
//       clientSecret: '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',
//       callbackURL: 'http://localhost:3002/dashboard', // Update this to match your frontend/backend configuration
//       scope: ['profile', 'email'],
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log('Access Token:', accessToken);
//       console.log('Refresh Token:', refreshToken);
//       console.log('Received user data from Google:');
//       console.log('Name:', profile.displayName);
//       console.log('Email:', profile.emails[0].value);
//       console.log('Image:', profile.photos[0].value);

//       return User.findOne({ email: profile.emails[0].value })
//         .then((existingUser) => {
//           if (existingUser) {
//             return existingUser;
//           } else {
//             const newUser = new User({
//               name: profile.displayName,
//               email: profile.emails[0].value,
//               image: profile.photos[0].value,
//             });
//             console.log("user save");
//             newUser.save()
//               .then((savedUser) => {
//                 done(null, savedUser); // New user saved
//                 console.log("user save")
//               })
//               .catch((error) => {
//                 console.error('Error saving user:', error);
//                 done(error, null);
//               });
//           }
//         })
//         .catch((error) => {
//           console.error('Error finding user:', error);
//           done(error, null);
//         });
//     }
//   )
// );

// // Serialize and deserialize user
// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser(async (id, done) => {
//   try {
//     const user = await User.findById(id);
//     done(null, user);
//   } catch (err) {
//     done(err, null);
//   }
// });
// app.use(passport.initialize());
// // Initiate Google login
// app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// // Handle Google OAuth2 callback and send user data to the frontend
// app.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     // Successful authentication, redirect to /success route.
//     res.redirect('/success');
//   }
// );

// // Route for sending user data as JSON
// app.get('/success', (req, res) => {
//   if (req.isAuthenticated()) {
//     // User is authenticated, you can send the user data here
//     const userData = {
//       name: req.user.name,
//       email: req.user.email,
//       image: req.user.image,
//     };
//     res.json(userData);
//   } else {
//     // User is not authenticated, handle it accordingly
//     res.redirect('/');
//   }
// });

// // Protected route example
// app.get('/profile', (req, res) => {
//   if (req.isAuthenticated()) {
//     // User is authenticated, you can send the user data here
//     res.json(req.user);
//   } else {
//     // User is not authenticated, handle it accordingly
//     res.redirect('/');
//   }
// });

// // Start the server
// app.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const session = require('express-session');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());

// Configure session middleware
app.use(session({ secret: 'your_secret_key', resave: true, saveUninitialized: true }));

// Initialize Passport.js
app.use(passport.initialize());
app.use(passport.session());

// Connect to MongoDB
mongoose.connect('mongodb+srv://jasimwazir098:khan!!!@cluster0.bbx0tzz.mongodb.net/googlesignin2', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

console.log('mongoose connected successfully');

// Define Mongoose schema for User
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  image: String,
  googleAccessToken: String,
});

const User = mongoose.model('User', userSchema);

// Configure Google OAuth2 Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: '864278402202-n16utitagqpdt047ft0crh17tcaf29be.apps.googleusercontent.com', // Replace with your Google OAuth client ID
      clientSecret: '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', // Replace with your Google OAuth client secret
      callbackURL: 'http://localhost:3000/auth/google/callback', // Update this to match your frontend/backend configuration
      scope: ['profile', 'email'],
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('Access Token:', accessToken);
      console.log('Refresh Token:', refreshToken);
      console.log('Received user data from Google:');
      console.log('Name:', profile.displayName);
      console.log('Email:', profile.emails[0].value);
      console.log('Image:', profile.photos[0].value);

      return User.findOne({ email: profile.emails[0].value })
        .then((existingUser) => {
          if (existingUser) {
            existingUser.googleAccessToken = accessToken;
            return existingUser.save();
          } else {
            const newUser = new User({
              name: profile.displayName,
              email: profile.emails[0].value,
              image: profile.photos[0].value,
              googleAccessToken: accessToken,
            });
            console.log('User save');
            return newUser.save();
          }
        })
        .then((user) => {
          done(null, user);
        })
        .catch((error) => {
          console.error('Error:', error);
          done(error, null);
        });
    }
  )
);

// Serialize and deserialize user
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

// Initiate Google login
app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// Handle Google OAuth2 callback and send user data to the frontend
app.get('/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect to /profile route.
    // res.redirect('/profile');
    res.redirect('http://localhost:3002/dashboard')
  }
);

// Route for sending user data as JSON
app.get('/profile', (req, res) => {
  if (req.isAuthenticated()) {
    // User is authenticated, you can send the user data here
    const userData = {
      name: req.user.name,
      email: req.user.email,
      image: req.user.image,
      googleAccessToken: req.user.googleAccessToken,
    };
    res.json(userData);
  } else {
    // User is not authenticated, handle it accordingly
    res.status(401).json({ message: 'Not authenticated' });
  }
});


app.get('/api/userData', async (req, res) => {
  try {
    // Fetch user data from the database
    const userData = await User.findOne({ /* Your query criteria */ });

    if (!userData) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Send the user data as a JSON response
    res.json(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});


// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});


