const exercisePool = [
    // Chest
    { name: 'Assisted Dip', muscles: ['Chest', 'Shoulders', 'Front Delts', 'Triceps'] },
    { name: 'Band-Assisted Bench Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Bar Dip', muscles: ['Chest', 'Shoulders', 'Triceps', 'Front Delts'] },
    { name: 'Bench Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Bench Press Against Band', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Board Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Cable Chest Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Close-Grip Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Close-Grip Feet-Up Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Decline Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Decline Push-Up', muscles: ['Chest', 'Triceps'] },
    { name: 'Dumbbell Chest Fly', muscles: ['Chest'] },
    { name: 'Dumbbell Chest Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Dumbbell Decline Chest Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Dumbbell Floor Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Dumbbell Pullover', muscles: ['Chest', 'Lats'] },
    { name: 'Feet-Up Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Floor Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Incline Bench Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Incline Dumbbell Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Incline Push-Up', muscles: ['Chest', 'Triceps'] },
    { name: 'Kettlebell Floor Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Kneeling Incline Push-Up', muscles: ['Chest', 'Triceps'] },
    { name: 'Kneeling Push-Up', muscles: ['Chest', 'Triceps'] },
    { name: 'Machine Chest Fly', muscles: ['Chest'] },
    { name: 'Machine Chest Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Pec Deck', muscles: ['Chest'] },
    { name: 'Pin Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Push-Up', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Push-Up Against Wall', muscles: ['Chest', 'Triceps'] },
    { name: 'Push-Ups With Feet in Rings', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Resistance Band Chest Fly', muscles: ['Chest'] },
    { name: 'Ring Dip', muscles: ['Chest', 'Shoulders', 'Triceps'] },
    { name: 'Smith Machine Bench Press', muscles: ['Chest', 'Triceps'] },
    { name: 'Smith Machine Incline Bench Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Smith Machine Reverse Grip Bench Press', muscles: ['Biceps', 'Chest', 'Triceps'] },
    { name: 'Standing Cable Chest Fly', muscles: ['Chest'] },
    { name: 'Standing Resistance Band Chest Fly', muscles: ['Chest'] },
  
  // Shoulders
    { name: 'Arnold Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Band Pull-Apart', muscles: ['Shoulders', 'Upper Back', 'Rear Delts'] },
    { name: 'Banded Face Pull', muscles: ['Shoulders', 'Upper Back', 'Rear Delts', 'Shoulders', 'Traps'] },
    { name: 'Barbell Front Raise', muscles: ['Shoulders', 'Front Delts'] },
    { name: 'Barbell Rear Delt Row', muscles: ['Rear Delts', 'Shoulders'] },
    { name: 'Barbell Upright Row', muscles: ['Shoulders', 'Traps'] },
    { name: 'Behind the Neck Press', muscles: ['Shoulders', 'Front Delts', 'Triceps'] },
    { name: 'Cable Front Raise', muscles: ['Shoulders', 'Front Delts'] },
    { name: 'Cable Lateral Raise', muscles: ['Shoulders', 'Side Delts'] },
    { name: 'Cable Rear Delt Row', muscles: ['Shoulders', 'Rear Delts'] },
    { name: 'Devils Press', muscles: ['Chest', 'Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Dumbbell Front Raise', muscles: ['Front Delts', 'Shoulders'] },
    { name: 'Dumbbell Lateral Raise', muscles: ['Shoulders', 'Side Delts'] },
    { name: 'Dumbbell Rear Delt Row', muscles: ['Rear Delts', 'Shoulders'] },
    { name: 'Dumbbell Shoulder Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Face Pull', muscles: ['Rear Delts', 'Shoulders', 'Traps'] },
    { name: 'Front Hold', muscles: ['Front Delts', 'Shoulders'] },
    { name: 'Landmine Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Machine Lateral Raise', muscles: ['Shoulders', 'Side Delts'] },
    { name: 'Machine Shoulder Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Monkey Row', muscles: ['Shoulders', 'Traps'] },
    { name: 'One-Arm Landmine Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Overhead Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Plate Front Raise', muscles: ['Front Delts', 'Shoulders'] },
    { name: 'Push Press', muscles: ['Front Delts', 'Quads', 'Shoulders', 'Triceps'] },
    { name: 'Reverse Cable Flyes', muscles: ['Rear Delts', 'Shoulders'] },
    { name: 'Reverse Dumbbell Flyes', muscles: ['Rear Delts', 'Shoulders'] },
    { name: 'Reverse Machine Fly', muscles: ['Rear Delts', 'Shoulders'] },
    { name: 'Seated Dumbbell Shoulder Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Seated Barbell Overhead Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Seated Smith Machine Shoulder Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Snatch Grip Behind the Neck Press', muscles: ['Front Delts', 'Shoulders', 'Triceps'] },
    { name: 'Squat Jerk', muscles: ['Quads', 'Hamstrings', 'Shoulders', 'Triceps'] },
    { name: 'Split Jerk', muscles: ['Hamstrings', 'Quads', 'Shoulders', 'Front Delts', 'Triceps'] },
  
// Triceps
    { name: 'Barbell Standing Triceps Extension', muscles: ['Triceps'] },
    { name: 'Barbell Incline Triceps Extension', muscles: ['Triceps'] },
    { name: 'Barbell Lying Triceps Extension', muscles: ['Triceps'] },
    { name: 'Bench Dip', muscles: ['Triceps', 'Chest', 'Shoulders'] },
    { name: 'Crossbody Cable Triceps Extension', muscles: ['Triceps'] },
    { name: 'Close-Grip Push-Up', muscles: ['Triceps', 'Chest'] },
    { name: 'Dumbbell Lying Triceps Extension', muscles: ['Triceps'] },
    { name: 'Dumbbell Standing Triceps Extension', muscles: ['Triceps'] },
    { name: 'Overhead Cable Triceps Extension', muscles: ['Triceps'] },
    { name: 'Tate Press', muscles: ['Triceps'] },
    { name: 'Tricep Bodyweight Extension', muscles: ['Triceps'] },
    { name: 'Tricep Pushdown With Bar', muscles: ['Triceps'] },
    { name: 'Tricep Pushdown With Rope', muscles: ['Triceps'] },
    { name: 'JM Press', muscles: ['Triceps'] },

  
  // Legs
    { name: 'Air Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Barbell Hack Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Barbell Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
    { name: 'Barbell Walking Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
    { name: 'Belt Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Body Weight Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
    { name: 'Bodyweight Leg Curl', muscles: ['Hamstrings', 'Glutes'] },
    { name: 'Box Jump', muscles: ['Quads', 'Glutes', 'Calves'] },
    { name: 'Box Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Bulgarian Split Squat', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
    { name: 'Chair Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Dumbbell Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
    { name: 'Dumbbell Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Front Squat', muscles: ['Quads', 'Glutes', 'Core'] },
    { name: 'Glute Ham Raise', muscles: ['Hamstrings', 'Glutes'] },
    { name: 'Goblet Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Hack Squat Machine', muscles: ['Quads', 'Glutes'] },
    { name: 'Half Air Squat', muscles: ['Quads'] },
    { name: 'Hip Adduction Machine', muscles: ['Adductors'] },
    { name: 'Jumping Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings', 'Calves'] },
    { name: 'Landmine Hack Squat', muscles: ['Quads', 'Glutes'] },
    { name: 'Landmine Squat', muscles: ['Quads', 'Glutes'] },
  // Legs
  { name: 'Leg Curl On Ball', muscles: ['Hamstrings', 'Glutes'] },
  { name: 'Leg Extension', muscles: ['Quads'] },
  { name: 'Leg Press', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Lying Leg Curl', muscles: ['Hamstrings'] },
  { name: 'Nordic Hamstring Eccentric', muscles: ['Hamstrings'] },
  { name: 'One-Legged Leg Extension', muscles: ['Quads'] },
  { name: 'One-Legged Lying Leg Curl', muscles: ['Hamstrings'] },
  { name: 'One-Legged Seated Leg Curl', muscles: ['Hamstrings'] },
  { name: 'Pause Squat', muscles: ['Quads', 'Glutes'] },
  { name: 'Pistol Squat', muscles: ['Quads', 'Glutes', 'Hamstrings', 'Core'] },
  { name: 'Reverse Barbell Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Reverse Body Weight Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Reverse Dumbbell Lunge', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Romanian Deadlift', muscles: ['Hamstrings', 'Glutes', 'Lower Back'] },
  { name: 'Safety Bar Squat', muscles: ['Quads', 'Glutes'] },
  { name: 'Seated Leg Curl', muscles: ['Hamstrings'] },
  { name: 'Shallow Body Weight Lunge', muscles: ['Quads'] },
  { name: 'Side Lunges (Bodyweight)', muscles: ['Quads', 'Glutes', 'Adductors'] },
  { name: 'Smith Machine Bulgarian Split Squat', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Smith Machine Front Squat', muscles: ['Quads', 'Glutes'] },
  { name: 'Smith Machine Squat', muscles: ['Quads', 'Glutes'] },
  { name: 'Squat', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Step Up', muscles: ['Quads', 'Glutes', 'Hamstrings'] },
  { name: 'Zercher Squat', muscles: ['Quads', 'Glutes', 'Core'] },
  { name: 'Zombie Squat', muscles: ['Quads', 'Glutes', 'Core'] },

  // Back
  { name: 'Assisted Chin-Up', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Assisted Pull-Up', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Back Extension', muscles: ['Back', 'Lower Back', 'Glutes'] },
  { name: 'Banded Muscle-Up', muscles: ['Back', 'Lats', 'Biceps', 'Shoulders'] },
  { name: 'Barbell Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Barbell Shrug', muscles: ['Back'] },
  { name: 'Block Clean', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Block Snatch', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Cable Close Grip Seated Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Cable Wide Grip Seated Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Chest to Bar', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Chin-Up', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Clean', muscles: ['Back', 'Traps', 'Glutes', 'Hamstrings'] },
  { name: 'Clean and Jerk', muscles: ['Back', 'Traps', 'Quads', 'Hamstrings', 'Shoulders'] },
  { name: 'Close-Grip Lat Pulldown', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Deadlift', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Deficit Deadlift', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Dumbbell Deadlift', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Dumbbell Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Dumbbell Shrug', muscles: ['Back'] },
  { name: 'Floor Back Extension', muscles: ['Back', 'Lower Back', 'Glutes'] },
  { name: 'Gorilla Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Hang Clean', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Hang Power Clean', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Hang Power Snatch', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Hang Snatch', muscles: ['Back', 'Traps', 'Hamstrings'] },
  { name: 'Inverted Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Inverted Row with Underhand Grip', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Jefferson Curl', muscles: ['Lower Back', 'Hamstrings'] },
  { name: 'Jumping Muscle-Up', muscles: ['Back', 'Lats', 'Biceps', 'Shoulders'] },
  { name: 'Kettlebell Clean', muscles: ['Back', 'Traps'] },
  { name: 'Kettlebell Clean & Jerk', muscles: ['Back', 'Traps', 'Shoulders'] },
  { name: 'Kettlebell Clean & Press', muscles: ['Back', 'Traps', 'Shoulders'] },
  { name: 'Kettlebell Swing', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Kroc Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Lat Pulldown With Pronated Grip', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Lat Pulldown With Supinated Grip', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Muscle-Up (Bar)', muscles: ['Back', 'Lats', 'Biceps', 'Shoulders'] },
  { name: 'Muscle-Up (Rings)', muscles: ['Back', 'Lats', 'Biceps', 'Shoulders'] },
  { name: 'Neutral Close-Grip Lat Pulldown', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'One-Handed Cable Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'One-Handed Kettlebell Swing', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'One-Handed Lat Pulldown', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Pause Deadlift', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Pendlay Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Power Clean', muscles: ['Back', 'Traps', 'Glutes'] },
  { name: 'Power Snatch', muscles: ['Back', 'Traps', 'Glutes'] },
  { name: 'Pull-Up', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Pull-Up With a Neutral Grip', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Rack Pull', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Ring Pull-Up', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Ring Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Scap Pull-Up', muscles: ['Traps', 'Shoulders'] },
  { name: 'Seal Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Seated Machine Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Single Leg Deadlift with Kettlebell', muscles: ['Hamstrings', 'Glutes', 'Lower Back'] },
  { name: 'Smith Machine One-Handed Row', muscles: ['Back', 'Lats'] },
  { name: 'Snatch', muscles: ['Back', 'Traps', 'Glutes'] },
  { name: 'Snatch Grip Deadlift', muscles: ['Back', 'Glutes', 'Hamstrings'] },
  { name: 'Stiff-Legged Deadlift', muscles: ['Hamstrings', 'Glutes', 'Lower Back'] },
  { name: 'Straight Arm Lat Pulldown', muscles: ['Lats', 'Back'] },
  { name: 'Sumo Deadlift', muscles: ['Glutes', 'Hamstrings', 'Back'] },
  { name: 'T-Bar Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Towel Row', muscles: ['Back', 'Lats', 'Biceps'] },
  { name: 'Trap Bar Deadlift With High Handles', muscles: ['Glutes', 'Hamstrings', 'Back'] },
  { name: 'Trap Bar Deadlift With Low Handles', muscles: ['Glutes', 'Hamstrings', 'Back'] },
  


// Abs / Core
{ name: 'Ball Slams', muscles: ['Core', 'Abs'] },
{ name: 'Cable Crunch', muscles: ['Abs'] },
{ name: 'Core Twist', muscles: ['Obliques', 'Abs'] },
{ name: 'Crunch', muscles: ['Abs'] },
{ name: 'Dead Bug', muscles: ['Core', 'Abs'] },
{ name: 'Dead Bug With Dumbbells', muscles: ['Core', 'Abs'] },
{ name: 'Dragon Flag', muscles: ['Abs', 'Core'] },
{ name: 'Hanging Knee Raise', muscles: ['Abs', 'Hip Flexors'] },
{ name: 'Hanging Leg Raise', muscles: ['Abs', 'Hip Flexors'] },
{ name: 'Hanging Sit-Up', muscles: ['Abs'] },
{ name: 'Hanging Windshield Wiper', muscles: ['Obliques', 'Abs'] },
{ name: 'High to Low Wood Chop with Band', muscles: ['Obliques', 'Core'] },
{ name: 'High to Low Wood Chop with Cable', muscles: ['Obliques', 'Core'] },
{ name: 'Hollow Hold', muscles: ['Core'] },
{ name: 'Horizontal Wood Chop with Band', muscles: ['Obliques', 'Core'] },
{ name: 'Horizontal Wood Chop with Cable', muscles: ['Obliques', 'Core'] },
{ name: 'Jackknife Sit-Up', muscles: ['Abs'] },
{ name: 'Kettlebell Plank Pull Through', muscles: ['Core', 'Shoulders'] },
{ name: 'Kneeling Ab Wheel Roll-Out', muscles: ['Abs', 'Core'] },
{ name: 'Kneeling Plank', muscles: ['Core'] },
{ name: 'Kneeling Side Plank', muscles: ['Obliques', 'Core'] },
{ name: 'L-Sit', muscles: ['Abs', 'Hip Flexors'] },
{ name: 'Lying Leg Raise', muscles: ['Abs'] },
{ name: 'Lying Windshield Wiper', muscles: ['Obliques', 'Abs'] },
{ name: 'Lying Windshield Wiper with Bent Knees', muscles: ['Obliques', 'Abs'] },
{ name: 'Machine Crunch', muscles: ['Abs'] },
{ name: 'Mountain Climbers', muscles: ['Core', 'Abs'] },
{ name: 'Oblique Crunch', muscles: ['Obliques'] },
{ name: 'Oblique Sit-Up', muscles: ['Obliques', 'Abs'] },
{ name: 'Plank', muscles: ['Core'] },
{ name: 'Plank with Leg Lifts', muscles: ['Core', 'Glutes'] },
{ name: 'Side Plank', muscles: ['Obliques', 'Core'] },
{ name: 'Sit-Up', muscles: ['Abs'] },


// Biceps
{ name: 'Bicep Curl', muscles: ['Biceps'] },
{ name: 'Incline Dumbbell Curl', muscles: ['Biceps'] },
{ name: 'Ez-Bar Curl', muscles: ['Biceps'] },
{ name: 'Hammer Curl', muscles: ['Biceps'] },
{ name: 'Barbell Curl', muscles: ['Biceps'] },
{ name: 'Zottman Curl', muscles: ['Biceps', 'Forearms'] },
{ name: 'Reverse Barbell Curl', muscles: ['Biceps', 'Forearms'] },
{ name: 'Overhead Cable Curl', muscles: ['Biceps'] },
{ name: 'Concentration Curls', muscles: ['Biceps'] },
{ name: 'Drag Curl', muscles: ['Biceps'] },
{ name: 'EZ Bar Preacher Curl', muscles: ['Biceps'] },
{ name: 'Spider Curl', muscles: ['Biceps'] },
{ name: 'One Arm Dumbbell Preacher Curl', muscles: ['Biceps'] },
{ name: 'Cheat Curls', muscles: ['Biceps'] },
{ name: 'Dumbbell Bicep Curl', muscles: ['Biceps'] },
{ name: 'Waiter Curl', muscles: ['Biceps'] },
{ name: 'Wide-Grip Standing Barbell Curl', muscles: ['Biceps'] },
{ name: 'Seated Dumbbell Curl', muscles: ['Biceps'] },
{ name: 'Machine Preacher Curls', muscles: ['Biceps'] },
{ name: 'Resistance Band Bicep Curl', muscles: ['Biceps'] },
{ name: 'Cable Curls', muscles: ['Biceps'] },

// Calves
{ name: 'Barbell Standing Calf Raise', muscles: ['Calves'] },
{ name: 'Donkey Calf Raise', muscles: ['Calves'] },
{ name: 'Eccentric Heel Drop', muscles: ['Calves'] },
{ name: 'Heel Raise', muscles: ['Calves'] },
{ name: 'Seated Calf Raise', muscles: ['Calves'] },
{ name: 'Standing Calf Raise', muscles: ['Calves'] }
];

export default exercisePool;
