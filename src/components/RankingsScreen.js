// import React, { useState, useEffect } from "react";

// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
//   makeStyles,
//   // CardActionArea,
//   CardActions,
//   Button
//   //   IconButton,
//   //   Collapse,
//   //   Paper
// } from "@material-ui/core";
// import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";


// import firebase from "./firebase";
// let moviesList = [];

// function RankingsScreen() {
//   const [moviesFetched, setMoviesFetched] = useState(false);

//   const fetchMoviesList = () => {
//     moviesList = []
//     const db = firebase
//       .firestore()
//       .collection(process.env.REACT_APP_MOVIES_COLLECTION_NAME);
//     db.get().then(snapshot => {
//       snapshot.forEach(doc => moviesList.push({ id: doc.id, ...doc.data() }));
//       moviesList.sort((a,b)=>b.score - a.score)

//       setMoviesFetched(true);
//     });
//   };
//   useEffect(() => fetchMoviesList(), []);
//   let rank = 0;
//   return (
//     <div>
//       {!moviesFetched ? (
//         <p>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ Loading rankings... ✧ﾟ･:*╰(◕‿◕╰)</p>
//       ) : (
//         <div>
//         <Typography variant="h5">Movie Rankings</Typography>
//         <List>
//           {moviesList.map((m)=>{
//             rank++;
//             return <ListItem>
//               <Typography variant="h5">{`#${rank}`}</Typography>
//                 <Card
//                   style={{
//                     display:`flex`,
//                     width:`100%`,
//                     justifyContent:`space-between`,
//                     marginLeft:`4em`
//                   }}>
                  
//                   <Typography variant="h5">{m.title}</Typography>
//                   <Typography variant="h5">{m.score}</Typography>
//                 </Card>              
//             </ListItem>
//           })}
//         </List>
//           </div>
//       )}
//     </div>
//   );
// }

// export default RankingsScreen;
