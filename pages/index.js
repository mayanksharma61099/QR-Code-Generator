import { useState } from 'react';
import QRCode from 'react-qr-code';

function App() {
	const [value, setValue] = useState();
	const [back, setBack] = useState('#FFFFFF');
	const [fore, setFore] = useState('#000000');
	const [size, setSize] = useState(256);

	return (
    <>
    <div className='container-fluid' style={{marginTop: '20px', fontFamily: 'sans-serif'}}>
      <center>
        <h2><b>QR Code Generator</b></h2>
      </center>
    </div>
    <div className="App"><div className={`container`}>
			<center>
				<br />
				<br />
          <div className={`container`}>
            <div className={`border border-success`} style={{padding: '50px'}}>
              <input 
                type="text"
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value of Qr-code"
                className='form-control'
              />
            </div>
          </div>
          <br />
				  <br />
          <br />
				{value && (
					<QRCode
            title='mayanksharma61099@okhdfcbank'
						value={value}
						size= '300'
					/>
				)}
			</center>
		</div>
	</div>
    </>
    );
}

export default App;
