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
import DraftPredictor from '../../assets/project_images/Draft_Predictor.png'
import MediaBias from '../../assets/project_images/Media_Bias.png'
import RTES from '../../assets/project_images/RTES.png'
import TIA from '../../assets/project_images/TIA.png'
import Astra from '../../assets/project_images/Astra.png'
import AES from '../../assets/project_images/AES.png'
import EfficientAi from '../../assets/project_images/Efficient_AI.png'

export const projectData = [
    {
      img: EfficientAi,
      title: 'Efficient Speech Recognition Model',
      date: 'Spring 2026',
      description: `Conducted a deep learning model compression study investigating the 
      accuracy/efficiency trade-offs of deploying OpenAI's Whisper Base ASR model 
      (74M parameters) onto resource-constrained edge-native systems. The research 
      maps the algorithmic impacts of post-training compression across two 
      multi-dimensional experimental axes: mixed-precision quantization 
      (varying symmetry, bitwidth down to 4-bit, and coarse tensor-wise vs. 
      fine-grained channel/token-wise granularity) and zero-shot network pruning 
      (evaluating unstructured, input-channel structured, and hardware-accelerated 
      2:4 semi-structured sparsity arrays). By executing automated evaluations against 
      the 5.4-hour LibriSpeech test-clean dataset on NVIDIA hardware, the project 
      proved that symmetric, channel- and token-wise INT8 quantization operates as 
      an effectively lossless compression (against the baseline 5.75% Word Error Rate), 
      while unstructured network encoder pruning maintains strict transcription 
      robustness up to a discrete 30% threshold before catastrophic degradation.`,
      tools: ['Python','PyTorch','Efficient AI'],
      docs: 'https://drive.google.com/file/d/1xJoLwKKuiIgTF_jNdyfQSXno1Pwb8-Di/view?usp=sharing',
      slides: 'https://docs.google.com/presentation/d/1-wLigxfSrCY1JKNgMiQFTmvGAkrAkwdrkJqaDtU6r_w/edit?usp=sharing',
      video: '',
      github: ''
    },
    {
      img: AES,
      title: 'AES Accelerator',
      date: 'Fall 2025',
      description: `Co-authored the architectural design and hardware implementation of an 
      energy-efficient System-on-Chip (SoC) AES Cryptographic Accelerator optimized for 
      battery-constrained wireless wearable devices (e.g., smartwatches, medical rings). 
      To offload computationally intensive security overhead from general-purpose processing 
      units, the architecture integrates a lightweight, open-source single-stage PicoRV32 
      RISC-V CPU core with a custom-designed hardware AES-128 cryptographic engine utilizing 
      an AXI4 memory-mapped interconnect and shared on-chip SRAM. Implemented from scratch 
      in register-transfer level (RTL) code targeting a TSMC 16nm technology node, the 
      hardware safely achieves a strict total silicon area budget of 0.04mm^2 and average 
      power usage of 2.797mW, well within the constraints of a wireless wearable device. 
      The design was synthesized with Genus, while place and route was done with Innovus,
      passing both LVS and STA checks. The DRC checks were completed with Calibre.
      The module achieves a 7.45x speedup over a highly optimized software AES program, 
      and currently supports only ECB. `,
      tools: ['Verilog','System-on-Chip Design','Innovus','Genus','Calibre'],
      docs: 'https://docs.google.com/document/d/1odKir0jp-DlCHAwE0MZtbmNYLZqGItDvBj7KzL068J8/edit?usp=sharing',
      slides: 'https://docs.google.com/presentation/d/1sKwFmmlA2ywJDcCl58rQ63LnDxybhQJ9aC-xoT0StLk/edit?usp=sharing',
      video: '',
      github: ''
    },
    {
      img: Astra,
      title: 'Cryptomining Detection in Shared Networks',
      date: 'Fall 2025',
      description: `Developed a hybrid, real-time security monitoring framework to 
      detect unauthorized cryptomining on shared networks. To prevent computational 
      resource drain and high operational energy costs, the system utilizes encrypted 
      network flow analysis to differentiate illicit mining scripts from legitimate, 
      compute-intensive research workloads like machine learning training models. 
      The infrastructure integrates automated logging with a machine learning 
      classification engine trained on public behavioral datasets and inferred on localized 
      cluster flow data. Furthermore, we implement a react frontend dashboard so admins can
      view model results in real-time. The optimized framework achieves an operational accuracy 
      target of 92.46% with high precision, providing a highly scalable, automated 
      defense layer for protecting clusters.`,
      tools: ['Python','PyTorch','React'],
      docs: 'https://drive.google.com/file/d/1KnjtmAy5jawl_DzPS7kRmYijKlrSIXd0/view?usp=sharing',
      slides: 'https://docs.google.com/presentation/d/1KuMd005RNBqDJDF5BH815oz2tvx6nYKPe_GV4KJfYPw/edit?usp=sharing',
      video: '',
      github: 'https://github.com/johnsony0/Astra'
    },
    {
      img: TIA,
      title: 'Transimpedance Amplifier',
      date: 'Fall 2025',
      description: `This project involves the design and optimization of a high-speed, 
      wideband Optical Receiver Front-End Transimpedance Amplifier (TIA) using a 1V CMOS 
      process with a target supply of 1.2V.. The amplifier interfaces with a high-speed 
      photodiode modeled as a current source with a 0.5pF shunt parasitic capacitance. 
      It converts weak input currents into a stable differential voltage swing (>100mV) 
      across two 50Ohm loads. Under a strict power budget of <50mW, the architecture 
      achieves a flat transimpedance gain of >74dB with <1dB of ripple, while maintaining 
      an operating bandwidth exceeding 5GHz. The design requires careful transistor 
      characterization, deliberate inductive/capacitive peaking for bandwidth extension, 
      and clever design choices to meet required specifications. `,
      tools: ['Virtuoso','Analog Circuits'],
      docs: 'https://docs.google.com/document/d/1AKQJGNdRpZC1QSj9ng8VPK4QG3ZXQJF-fLWQZpF_tck/edit?usp=sharing',
      slides: 'https://docs.google.com/presentation/d/1L-nTuL1rI73Wvg0oFVVQ1hP5qiEsRm74SxD_yvnZjgE/edit?usp=sharing',
      video: '',
      github: ''
    },
    {
      img: RTES,
      title: 'Parkinson Tremor and Dyskinesia Detection',
      date: 'Spring 2025',
      description: `Developed a self-contained, real-time medical embedded system to monitor 
      and quantify motor symptoms in Parkinson disease patients using a 
      microcontroller development board. Utilizing an onboard 6-axis IMU 
      (accelerometer/gyroscope), the system captures structural hand movement data 
      in three-second intervals and processes it locally via a Fast Fourier Transform (FFT) 
      algorithm to analyze frequency domains. By mapping spectral energy densities, the 
      device successfully distinguishes between resting tremors and levodopa-induced 
      dyskinesia. To optimize patient usability and clinical monitoring without a computer 
      tether, the firmware quantifies symptom intensity metrics and outputs real-time alerts
       directly through LEDs, providing a low-power, robust tool for Parkinson patients. `,
      tools: ['C++','Microcontrollers','Embedded Systems'],
      docs: '',
      slides: '',
      video: 'https://drive.google.com/file/d/1RKyJN3X_-tkGvKFpaMurPJeR-cMa2Wff/view?usp=sharing',
      github: 'https://github.com/johnsony0/parkinson-device'
    },
    {
      img: MediaBias,
      title: 'Media Bias Detection',
      date: '2024',
      description: `Created a deep learning model that looks for political bias
      in social media posts. The data was obtained through scalping Facebook posts
      by known biased sources such as NYT(left), Fox News(right), and the like.
      The text obtained were encoded through doc2vec, and put through a neural
      network consisting of leaky ReLUs and linear layers. The trained model has
      an accuracy of ~90% on the test dataset.`,
      tools: ['Python','PyTorch','NumPy','Gensim','Sklearn'],
      docs: '/projects/media-bias',
      slides: '',
      video: '',
      github: 'https://github.com/johnsony0/Media-Bias-Detector',
    },
    {
      img: DraftPredictor,
      title: 'League of Legends Draft Predictor',
      date: '2024',
      description: `A machine learning project designed to predict the winning team 
      in a League of Legends match based on the selected champions. This project 
      utilizes PyTorch to construct a convolutional neural network and incorporates 
      scikit-learn's linear support vector machine classification and naive Gaussian 
      Bayes classification algorithms. The final prediction is achieved through an 
      ensemble voting mechanism, delivering a verdict of either a blue team or red team 
      victory.`,
      tools: ['Python','PyTorch','NumPy','ONNX','Sklearn'],
      docs: '/projects/draft-predictor',
      slides: '',
      video: '',
      github: 'https://github.com/johnsony0/Draft-Analysis',
    },
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
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
      slides: '',
      video: '',
      github: '',
    }
  ];