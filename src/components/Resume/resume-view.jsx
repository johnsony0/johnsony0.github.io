import React from 'react';
import resume from '../../assets/Resume.pdf'

function Resume() {
  return (
    <div>
      <iframe class="pdf" 
        title="Resume"
        src={resume}
        style={{
          position: 'absolute',
          top: '64px',
          left: 0,
          width: '100%',
          height: 'calc(100% - 64px)', 
          border: 'none',
        }}
        frameborder="0"
      ></iframe>
    </div>
  );
}

export default Resume;