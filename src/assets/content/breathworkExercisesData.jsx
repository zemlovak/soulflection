const exercisesList = [
  {
    title: "Deep Belly Breathing",
    url: "https://www.youtube.com/watch?v=7Ep5mKuRmAA&ab_channel=IndianaUniversitySchoolofMedicine",
    difficulty: "beginner",
    detail: {
      description:
        "As one of the simplest yet most effective ways to calm your body and mind, this technique is especially useful when you need to relieve stress, feel more grounded, or prepare for a restful night's sleep.",
      instructions: [
        "Find a comfortable position, either sitting or lying down.",
        "Place one hand on your belly to help you feel each breath as you inhale deeply through your nose, allowing your stomach to rise as you fill your lungs.",
        "Hold your breath for a couple of seconds, then slowly exhale through your mouth, feeling your belly fall.",
        "Repeat this pattern for about five to ten breaths, letting your body relax with each exhale.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Diaphragmatic Breathing",
    url: "https://youtu.be/OXjlR4mXxSk?si=jmiCzErTjyoVnXzg",
    difficulty: "beginner",
    detail: {
      description:
        "This type of breathing can help strengthen your diaphragm and improve your body's ability to take in oxygen. It can be particularly helpful if you're dealing with respiratory issues or you want to ease physical tension.",
      instructions: [
        "Place one hand on your chest and the other right below your ribs.",
        "Close your eyes for a deeper practice.",
        "Breathe in deeply through your nose, aiming to move only your diaphragm (your belly should rise while your chest stays relatively still).",
        "Exhale slowly through pursed lips, feeling your belly lower.",
        "Practice this for about 5-10 minutes every day.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Box Breathing",
    url: "https://youtu.be/a7uQXDkxEtM?si=VbAg5W9px1bW2OBr",
    difficulty: "beginner",
    detail: {
      description:
        "A favorite among people who need to manage stress on the go, box breathing helps balance oxygen levels, slow your heart rate, and quickly shift your body into a calm state, making it ideal for high-stress situations.",
      instructions: [
        "Visualize a box where each breath segment represents one side.",
        "Close your eyes for a deeper practice.",
        "Inhale slowly through your nose for a count of four as you imagine progressing up the side of the square.",
        "Hold your breath for another four along the top of the square.",
        "Exhale for four as you move down the box, then pause for a final count of four to return to the start point.",
        "Continue for a few rounds, focusing on maintaining an even rhythm.",
      ],
      contraindications: [],
    },
  },
  {
    title: "The 4-7-8 Breathing Technique",
    url: "https://youtu.be/1Dv-ldGLnIY?si=BAG5gd3vh4Hhd1Z8",
    difficulty: "beginner",
    detail: {
      description:
        "This technique is designed to calm the nervous system and ease anxiety. It's particularly useful for winding down at the end of the day, so you're feeling ready for sleep.",
      instructions: [
        "Get into a comfortable position. You can sit or lie down.",
        "Close your eyes for a deeper practice.",
        "Breathe in through your nose for a count of four.",
        "Hold your breath for a count of seven.",
        "Breathe out slowly through your mouth for a count of eight, aiming for a gentle, complete exhale.",
        "Repeat this sequence three to four times, allowing yourself to fully relax.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Alternate nostril breathing (Nadi Shodhana)",
    url: "https://www.youtube.com/watch?v=a7re4bKxB3A&ab_channel=Headspace",
    difficulty: "advanced",
    detail: {
      description:
        "Alternate nostril breathing can help balance energy, ease stress, and improve focus. It's a great choice when you're feeling mentally or physically drained and need a quick reset.",
      instructions: [
        "Sit in a comfortable position and place your left hand on your knee.",
        "Close your eyes for a deeper practice.",
        "With your right thumb, gently close your right nostril and inhale deeply through your left nostril.",
        "Close your left nostril with your ring finger, release your right nostril, and exhale fully through the right side.",
        "Inhale through the right nostril, close it, then exhale through the left.",
        "Continue this alternating pattern 5-10 times.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Pursed Lip Breathing",
    url: "https://youtu.be/ZWWMw4ln8YA?si=xmTWNQjvSmjqiEKE",
    difficulty: "beginner",
    detail: {
      description:
        "This technique can increase oxygen flow to the lungs, which can be especially helpful if you have respiratory issues. It's also calming, so it can ease anxiety and reduce shortness of breath.",
      instructions: [
        "Breathe in through your nose for a count of two.",
        "Then purse your lips as if you're blowing out a candle and exhale slowly for a count of four.",
        "Keep the exhale gentle and controlled.",
        "Repeat several times, focusing on making the exhale twice as long as the inhale.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Lion's Breath",
    url: "https://youtube.com/shorts/j5vx8kFtuJc?si=e9P_VWISTvyBR3sz",
    difficulty: "beginner",
    detail: {
      description:
        "The lion's breath exercise releases tension, particularly in the face and jaw, while also boosting energy and clearing mental fog. It's an energizing technique that's great for moments when you feel sluggish or want to improve your mood quickly.",
      instructions: [
        "Take a deep breath in through your nose.",
        "Next, open your mouth wide, stick out your tongue",
        'Forcefully exhale with a loud "ha" sound.',
        "Focus on releasing any tension from your face, jaw, and throat.",
        "Repeat 3-5 times, letting yourself feel fully present with the exercise",
      ],
      contraindications: [],
    },
  },
  {
    title: "Resonant Breathing",
    url: "https://youtu.be/dPkpW5lqL3E?si=vtheuM3oGrKub6_J",
    difficulty: "beginner",
    detail: {
      description:
        "Also known as coherent breathing, resonant breathing can help calm your nervous system and improve heart rate variability, which is an indicator of how your body adapts to stress and recovers. It's a great technique for anyone looking to manage stress in the long run.",
      instructions: [
        "Breathe in deeply for a count of five and then exhale for a count of five, maintaining a steady, slow rhythm.",
        "Aim to take about six breaths per minute, or whatever pace feels comfortable.",
        "Focus on keeping your breaths even and controlled.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Humming Bee Breath (Bhramari)",
    difficulty: "advanced",
    url: "https://youtu.be/eBqFqUxOvSU?si=53gMdB_RebsVQDDw&t=115",
    detail: {
      description:
        "Use this deeply relaxing technique to reduce frustration and tension. It can be particularly helpful for calming your mind before sleep or during moments of stress. It is also said to help with headaches to relieve migraine symptoms.",
      instructions: [
        "Sit comfortably, close your eyes, and take a deep breath in.",
        "As you exhale, make a gentle humming sound through closed lips, like a bee.",
        "Focus on the vibrations in your head and face.",
        "Repeat this pattern five to ten times, letting the vibrations soothe your mind.",
      ],
      contraindications: [],
    },
  },
  {
    title: "Bhastrika (Bellows Breath)",
    difficulty: "expert",
    url: "https://youtu.be/3zsFEsmDFOg?si=3ao5U_42p1vzBqlt",
    detail: {
      description:
        "When we do any physical exercise our body demands more oxygen, which signals the heart to pump faster, thus raising the heartbeat. But did you know that when you do Bhastrika Pranayama,  you pump even more quantity of oxygen even without the body not asking for it. Bhastrika Pranayama is the process of rapid inhalation and exhalation which gives a boost to the body and hence is aptly called the “yogic breath of fire”. So, the next time you feel like your body needs energy, try Bhastrika Pranayama instead.",
      instructions: [
        "Sit comfortably, on your heels or with legs crossed, the spine upright.",
        "Makes a fist and fold your arms, placing them near your shoulders.",
        "Inhale deeply, raise your hands straight up and open your fists.",
        "Exhale slightly forcefully, bring your arms down next to your shoulders and close your fists.",
        "Continue for 20 breaths.",
        "Relax with palms on your thighs.",
        "Take a few normal breaths.",
        "Continue for two more rounds.",
      ],
      contraindications: [
        "Make sure you practice it on an empty stomach.",
        "Pregnant women should avoid it.",
        "Do it at your own pace. If you feel dizzy, increase the duration of the breaks.",
        "If you suffer from hypertension and panic disorders, then do it under the supervision of a teacher.",
      ],
    },
  },
  {
    title: "Kapal Bhati (Breath of Shining Skull)",
    difficulty: "expert",
    url: "https://youtu.be/io5VdgwD2gk?si=BKqOyC7j4REuDFcD&t=46",
    detail: {
      description:
        "Use this deeply relaxing technique to reduce frustration and tension. It can be particularly helpful for calming your mind before sleep or during moments of stress. It is also said to help with headaches to relieve migraine symptoms.",
      instructions: [
        "Sit comfortably with your spine erect. Place your hands on the knees with palms open to the sky.",
        "Take a deep breath in.",
        "As you exhale, pull your navel back towards the spine. Do as much as you comfortably can. You may keep your right hand on the stomach to feel the abdominal muscles contract.",
        "As you relax the navel and abdomen, the breath flows into your lungs automatically.",
        "Take 20 such breaths to complete one round of Kapal Bhati.",
        "After completing the round, relax with your eyes closed and observe the sensations in your body.",
        "Do two more rounds of Kapal Bhati.",
      ],
      contraindications: [
        "Make sure you practice it on an empty stomach.",
        "Pregnant women should avoid it.",
        "Do it at your own pace. If you feel dizzy, increase the duration of the breaks.",
        "If you suffer from hypertension and panic disorders, then do it under the supervision of a teacher.",
        "Not to be practiced by anyone suffering from injury of the neck, as there is pressure with the fast exhalation.",
        "Not to be done or practiced by anyone suffering from lower back pain or even slip disc.",
      ],
    },
  },
];

export default exercisesList;
