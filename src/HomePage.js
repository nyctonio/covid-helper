import React from 'react';
import { Cards, CountryPicker, Chart,Header,Footer } from './components';
import { fetchData } from './api/';

class HomePage extends React.Component {
  state = {
    data: {},
    country: '',
  }
  async componentDidMount() {
    const data = await fetchData();

    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className="bg-gray-200">
        <Header/>
      <div>
        <div className='flex-wrap w-full p-10'>
        <Cards data={data} />
        <div className="flex">
        <div className="w-8/12">
        <CountryPicker className="m-10" handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} /> 
        </div>
        <div className="w-4/12 ml-10 h-96 align-text-middle">
        <div className="rounded-xl w-full h-96 px-5 py-4 bg-gray-300">
          <div className="w-full text-xl flex items-center justify-center"><h1>Leader Board</h1></div>
          <div className="w-full py-5 justify-center text-white text-center mt-5 h-16 rounded-md bg-gray-400"><p> 1. Ritesh Kumar 500 </p> </div>
          <div className="w-full  py-5 text-white text-center mt-2 h-16 rounded-md bg-gray-400"> <p className=""> 2. Vaibhav 300  </p> </div>
          <div className="w-full  py-5  text-white text-center mt-2 h-16 rounded-md bg-gray-400"> <p> 3. Rishabh Kumar 290   </p></div>
          <div className="w-full  py-5  text-white text-center  mt-2 h-16 rounded-md bg-gray-400"> <p> 4. Harshit Aditya 250   </p> </div>
        </div>
        </div>
        </div>
        </div>
      </div>
      <Footer />
      </div>
    );
  }
}

export default HomePage;