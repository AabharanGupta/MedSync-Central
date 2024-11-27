import React from 'react';

const StreamlitEmbed = () => {
  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      <iframe
        src="http://localhost:8501"  // URL where your Streamlit app is hosted
        style={{ border: 'none', width: '100%', height: '100%'}}
        title="Streamlit App"
      ></iframe>
    </div>
  );
};

export default StreamlitEmbed;