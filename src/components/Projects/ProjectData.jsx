import BostonCrime from '../../assets/project_images/Boston_Crime_Data.png';
import CalcApp from '../../assets/project_images/Calculator_App.png';
import ChatApp from '../../assets/project_images/Chat_App.png'
import EvoKube from '../../assets/project_images/Evolution_Kubernetes.png'
import Langolio from '../../assets/project_images/Langolio.png'
import PokerPP from '../../assets/project_images/PokerProPlus.png'
import Portfolio from '../../assets/project_images/Portfolio.png'
import TempSens from '../../assets/project_images/Temp_Sensor.png'
import Timer from '../../assets/project_images/Timer_Project.png'
import Wheelchair from '../../assets/project_images/Wheelchair_Lights.png'



export const projectData = [
    {
      img: Portfolio,
      title: 'Portfolio Website',
      date: '2024',
      description: 'A simple portfolio, made with React, using components from MUI. The application aims to be mobile and desktop friendly, smooth, and minimalistic.',
      tools: ['React','HTML','CSS'],
      docs: '',
      video: '',
      github: 'https://github.com/johnsony0/johnsony0.github.io/',
    },
    {
      img: PokerPP,
      title: 'Poker Pro Plus',
      date: '2024',
      description: 'Our team sought to create an AI that could play poker comparable to humans using reinforcement learning. We started with a KerasRL implementation of a DQN (deep q-network) to train our AI, and expanded to also use a DDQN and pytorch custom implementation of a DQN. This was all with a poker environment provided at https://github.com/dickreuter/neuron_poker',
      tools: ['Python','PyTorch','KerasRL'],
      docs: 'https://docs.google.com/document/d/1lB2v-oVOLgsdV9RHJIZiZ0Wj-a0necM_gbGB3E6Zy_w/edit',
      video: '',
      github: 'https://github.com/ASasamori/PokerProPlus',
    },
    {
      img: Langolio,
      title: 'Langolio',
      date: '2024',
      description: 'We created an application facilitate a language exchange in a classroom. We provide safety to students through filters and monitoring, and their analytics to use for grading. Also features secure authentication and seamless classroom creation.',
      tools: ['React','Python','MongoDB'],
      docs: 'https://docs.google.com/document/d/1ccU59FPeZFUcK6-HvYzW15L03Q9a5w52/edit',
      video: '',
      github: '',
    },
    {
      img: EvoKube,
      title: 'Evolution of Kubernetes',
      date: '2023',
      description: 'Using available SBOMs of Kubernetes, we analyze the chronological evolution of vulnerabilities within Kubernetes. We also create a tool for users to view and interact with our analyzed data. All of our observed data can also be viewed in a timeline UI.',
      tools: ['Python','SBOM','Neo4J'],
      docs: '',
      video: 'https://drive.google.com/file/d/1hH2lV2tA4Uf3NrLAzUNJ_YGq4g82V3Hz/view',
      github: 'https://github.com/EC528-Fall-2023/Evolution-of-Kubernetes-',
    },
    {
      img: ChatApp,
      title: 'Chat App',
      date: '2023',
      description: 'Using React and Firebase to develop a messaging app. Done through using react to create the front end such as the login button, messaging UI, and searching UI. Then we used Firebase to store the data of users such as their email and username, and private chat rooms.',
      tools: ['React','Google Firebase'],
      docs: '',
      video: '',
      github: 'https://github.com/Ruben304/SW_MiniProject/tree/main',
    },
    {
      img: Wheelchair,
      title: 'Wheelchair Lights',
      date: '2022',
      description: 'A semester-long project, we created CAD renderings of our enclosure, and figured out how to tackle each problem (ex: how will we attach them, what watts of lights do we need, how would we power the device). Then we built our device.',
      tools: ['Arduino', 'Circuits'],
      docs: 'https://docs.google.com/document/d/1B6WKOhBShQ9XDBVTBBp-FwpLUoEKYktzDcleE8b4uOQ/edit',
      video: 'https://youtu.be/JlNcuc8Ov9o',
      github: '',
    },
    {
      img: Timer,
      title: 'Timer',
      date: '2022',
      description: 'Our goal in this project is to use a HDL to create code that we would then upload into an FPGA board, and our task was to make the FPGA board into a timer which could pause, reset, play, and restart. Then if the timer hits 0, the led is supposed to blink. This was all done through verilog, into a Nexys FPGA board.',
      tools: ['Verilog','Hardware-Design Language','FPGA Board'],
      docs: '',
      video: 'https://youtu.be/JlNcuc8Ov9o',
      github: '',
    },
    {
      img: CalcApp,
      title: 'Graphing Calculator',
      date: '2021',
      description: 'Created a c++ application which allows you to find the best fit according to preference. Reading in a CSV, and plots the line of best fit. Also is inclusive with a calculator function and matrix calculations.',
      tools: ['C++'],
      docs: 'https://docs.google.com/document/d/13JnEA8aHwHwct4uS0nDyhAWpBS99l5RhdX3RyBTQ17c/edit?usp=sharing',
      video: 'https://youtu.be/0Puglg-wOxA',
      github: 'https://github.com/rithvik-doshi/EC327_Final_Project',
    },
    {
      img: TempSens,
      title: 'Temperature Sensor',
      date: '2021',
      description: 'Using CAD, we made a render of our enclosure. Then using an arduino and some circuitry, we created a thermometer which displays the temperature near the device onto an LCD screen.',
      tools: ['CAD','Arduino','Circuits'],
      docs: 'https://docs.google.com/document/d/1Ioeh_AXAcAIBAA9AuHauAnR_eUGf-e6XeBGSdUn9kus/edit',
      video: '',
      github: '',
    },
    {
      img: BostonCrime,
      title: 'Analysis of Boston Crime Data',
      date: '2020',
      description: 'Using matlab to filter through hundreds of thousands of cells worth of data, in particular we are looking at data of crime, and sifting through it to find the most dangerous parts of Boston, predict the crime rate in the future, and establish the most common types of crime.',
      tools: ['MatLab'],
      docs: 'https://drive.google.com/file/d/1R9EaoF-GucTQNo4k6WmYZorZFAOohVBI/view',
      video: '',
      github: '',
    }
  ];