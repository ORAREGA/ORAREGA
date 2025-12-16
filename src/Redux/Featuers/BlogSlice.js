import { createSlice } from '@reduxjs/toolkit';

// Initial timeline data
import img1 from '../../assets/LifeInOra/img1.jpg';
import img2 from '../../assets/LifeInOra/img2.jpg';
import img3 from '../../assets/LifeInOra/img3.jpg';
import img4 from '../../assets/LifeInOra/img4.jpg';
import img5 from '../../assets/LifeInOra/img5.jpg';
import img6 from '../../assets/LifeInOra/img6.jpg';
import img7 from '../../assets/LifeInOra/img7.jpg';
import img8 from '../../assets/LifeInOra/img8.jpg';
import img9 from '../../assets/LifeInOra/img9.jpg';
import img10 from '../../assets/LifeInOra/img10.jpg';
import img11 from '../../assets/LifeInOra/img11.jpg';
import img12 from '../../assets/LifeInOra/img12.jpg';

const initialState = [
  {
    img: img7,
    title: 'Christmas Celebration',
    date: '2024-12-25',
    description:
      'Santa visited ORAREGA Christmas brought joy, games, and warmth to the end of the year.',
  },
  {
    img: img5,
    title: 'Team Dinner',
    date: '2024-12-11',
    description:
      'Great food, even better conversations. Our team dinner was a moment to unwind and bond.',
  },
  {
    img: img3,
    title: "Boss's Birthday Bash",
    date: '2024-11-21',
    description:
      "We celebrated our leader's birthday with a heartfelt surprise and gifts from the whole team.",
  },
  {
    img: img4,
    title: 'Diwali at ORAREGA',
    date: '2024-11-02',
    description:
      'Diwali was full of lights, sweets, and team bonding. The office shone bright with diyas and laughter.',
  },
  {
    img: img6,
    title: 'Diwali Preparations',
    date: '2024-10-30',
    description:
      'Pre-Diwali excitement filled the air as we decorated and planned for the big celebration.',
  },
  {
    img: img2,
    title: 'Dasara Celebration',
    date: '2024-10-12',
    description:
      'A festive day celebrating victory of good over evil. Our team came together to mark this vibrant occasion.',
  },
  {
    img: img1,
    title: 'Ganesh Visarjan',
    date: '2024-09-20',
    description:
      'We bid farewell to Bappa with devotion and joy, celebrating Ganesh Visarjan with our ORAREGA family.',
  },
  {
    img: img9,
    title: 'Business Conference',
    date: '2024-08-20',
    description:
      'We showcased our innovation on a global platform and networked with industry leaders.',
  },
  {
    img: img8,
    title: 'Corporate Event',
    date: '2024-06-16',
    description:
      'One of our biggest events this year - full of engagement, learning, and excitement.',
  },
  {
    img: img10,
    title: 'Team Picnic',
    date: '2024-03-20',
    description:
      'A day filled with laughter, games, and relaxation in nature. Our picnic was unforgettable!',
  },
  {
    img: img11,
    title: 'Independence Day Celebration',
    date: '2025-08-15',
    description: 'Patriotism and pride filled the air as we hoisted the tricolor and celebrated the spirit of independence at ORAREGA.',
  },
  {
    img: img12,
    title: 'Ganesh Visarjan',
    date: '2025-09-02',
    description: 'With chants and devotion, we bid farewell to Lord Ganesha. The ORAREGA family celebrated with unity and joy.',
  },
];

const blogSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
});

export default blogSlice.reducer;
