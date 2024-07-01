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
import PySuperTuxKart from '../../assets/project_images/PySuperTuxKart.jpg'
import StockPredictor from '../../assets/project_images/Stock_Predictor.png'

export const projectData = [
    {
      img: StockPredictor,
      title: 'PyTorch Stock Predictor',
      date: '2024',
      description: `A stock predictor built with pytorch. Uses NumPy and
      pandas for data processing, and MatPlotLib for data visualizations. 
      Stock data is obtained from Alpaca API. Accurately predicts stock data
      within 5% of the actual value. More information can be found in the GitHub ReadME.`,
      tools: ['Python','PyTorch','NumPy','Pandas','MatPlotLib'],
      docs: 'https://colab.research.google.com/drive/1jrzIKp2qZm_Y8hFpEN6gugbwWTTyA_NI?usp=sharing',
      video: '',
      github: 'https://github.com/johnsony0/PyTorch-Stock-Predictor',
    },
    {
      img: Portfolio,
      title: 'Portfolio Website',
      date: '2024',
      description: `A simple portfolio, made with React, using components 
      from MUI. The application aims to be mobile and desktop friendly, 
      smooth, and minimalistic.`,
      tools: ['React','HTML','CSS'],
      docs: '',
      video: '',
      github: 'https://github.com/johnsony0/johnsony0.github.io/',
    },
    {
      img: PokerPP,
      title: 'Poker Pro Plus',
      date: '2024',
      description: `Our team sought to create an AI that could play poker 
      comparable to humans using reinforcement learning. We started with 
      a KerasRL implementation of a DQN (deep q-network) to train our AI, 
      and expanded to also use a DDQN and pytorch custom implementation of
      a DQN. This was all with a poker environment provided at 
      https://github.com/dickreuter/neuron_poker`,
      tools: ['Python','PyTorch','KerasRL'],
      docs: 'https://docs.google.com/document/d/1rHJUzCxcWc7JC6oq2X0Xh9PIBilleGCNsLzkkOqdrT8/edit?usp=sharing',
      video: '',
      github: 'https://github.com/ASasamori/PokerProPlus',
    },
    {
      img: Langolio,
      title: 'Langolio',
      date: '2024',
      description: `We created an application to facilitate language 
      exchange in a classroom. We provide safety to students through 
      filters and monitoring, and their analytics to use for grading. 
      Also features secure authentication and seamless classroom creation
      amongst others.`,
      tools: ['React','Python','MongoDB'],
      docs: 'https://docs.google.com/document/d/1pnWa_NMAa_05x_sYG8P9QU01FiB6tPDp/edit?usp=sharing',
      video: '',
      github: '',
    },
    {
      img: EvoKube,
      title: 'Evolution of Kubernetes',
      date: '2023',
      description: `Using available SBOMs of Kubernetes, we analyze the 
      chronological evolution of vulnerabilities within Kubernetes. We also 
      create a tool for users to view and interact with our analyzed data. 
      All of our observed data can also be viewed in a timeline UI.`,
      tools: ['Python','SBOM','Neo4J'],
      docs: '',
      video: 'https://drive.google.com/file/d/11iz5aTGtU2Mmv-lno0Jbp0xCZwPQC6nW/view?usp=sharing',
      github: 'https://github.com/EC528-Fall-2023/Evolution-of-Kubernetes-',
    },
    {
      img: PySuperTuxKart,
      title: 'PySuperTuxKart AI Driving',
      date: '2023',
      description: `Utilizing convolutional neural networks to process images,
      we created an AI that could drive a virtual go-kart. This was done with
      PySuperTuxKart, a python based open source racing simulator, which provides
      the environment to build our machine learning model. The models themselves
      were built with PyTorch.`,
      tools: ['Python','Pytorch'],
      video: 'https://drive.google.com/file/d/17JVAmMsRl_nK6yxXb9xZXnHe-3OQ1phV/view?usp=sharing',
      docs: 'https://docs.google.com/document/d/1mr3jFxP_G28AQD85rXNlD-YNCPSOLbSOUbxiTQapAnA/edit?usp=sharing',
      github: '',
    },
    {
      img: ChatApp,
      title: 'Chat App',
      date: '2023',
      description: `Used React and Firebase to develop a messaging app. 
      Done through using react to create the front end such as the login 
      button, messaging UI, and searching UI. Then we used Firebase to 
      store the data of users such as their email and username, and private 
      chat rooms.`,
      tools: ['React','Google Firebase'],
      docs: '',
      video: '',
      github: 'https://github.com/Ruben304/SW_MiniProject/tree/main',
    },
    {
      img: Wheelchair,
      title: 'Wheelchair Lights',
      date: '2022',
      description: `
      A semester-long project, we created CAD renderings of 
      our enclosure, and figured out how to tackle each problem 
      (ex: how will we attach them, what watts of lights do we need, 
        how would we power the device). Then we built our device.`,
      tools: ['Arduino', 'Circuits'],
      docs: 'https://docs.google.com/document/d/1yXN3RWq54MDJTQ3Jv2crrmLNf3bGofxo/edit?usp=sharing',
      video: '',
      github: '',
    },
    {
      img: Timer,
      title: 'Timer',
      date: '2022',
      description: `Our goal in this project 
      was to make the FPGA board into a timer which could pause, 
      reset, play, and restart. Then if the timer hits 0, the led is 
      supposed to blink. This was all done in code through 
      verilog, into a Nexys FPGA board.`,
      tools: ['Verilog','Hardware-Design Language','FPGA Board'],
      docs: '',
      video: 'https://youtu.be/JlNcuc8Ov9o',
      github: '',
    },
    {
      img: CalcApp,
      title: 'Graphing Calculator',
      date: '2021',
      description: `Created a c++ application which allows you to find the 
      best fit according to preference through reading a CSV, and plotting the 
      line of best fit. Also is inclusive with a calculator function and 
      matrix calculations.`,
      tools: ['C++'],
      docs: 'https://drive.google.com/file/d/1QntxDl2yZbvCZDSFy-JvzT923SsWyEVu/view?usp=sharing',
      video: 'https://youtu.be/0Puglg-wOxA',
      github: 'https://github.com/rithvik-doshi/EC327_Final_Project',
    },
    {
      img: TempSens,
      title: 'Temperature Sensor',
      date: '2021',
      description: `
      Using CAD, we made a render of our enclosure. 
      Then using an arduino and some circuitry, we created a thermometer 
      which displays the temperature near the device onto an LCD screen.`,
      tools: ['CAD','Arduino','Circuits'],
      docs: 'https://docs.google.com/document/d/17a1qMYRX2qH9R-ognVP8tZv5m4GqRDwG-vVnStYgCfY/edit?usp=sharing',
      video: '',
      github: '',
    },
    {
      img: BostonCrime,
      title: 'Analysis of Boston Crime Data',
      date: '2020',
      description: `Using matlab to filter through hundreds of thousands 
      of cells worth of data, in particular we are looking at data of 
      crime, and sifting through it to find the most dangerous parts of 
      Boston, predict the crime rate in the future, and establish the 
      most common types of crime.`,
      tools: ['MatLab'],
      docs: 'https://drive.google.com/file/d/1_1GN4hiNq9V4vckAvkfT2BvvZQsitsnY/view?usp=sharing',
      video: '',
      github: '',
    }
  ];