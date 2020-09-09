import React, { Component } from 'react';
import './App.css';
import Footer from '../Footer/Footer';
import Questions from '../Questions/Questions';
import Hearts from '../Hearts/Hearts';
import Counter from '../Counter/Counter';
import staticQuestions from '../staticQuestions';

class App extends Component {

    state={
    hearts: 3,
    emptyHearts: 0,
    questionId: 0,
    staticTest: '',
    result:'',
    }

    fetchData(){
    return staticQuestions;
    }

    componentDidMount(){
        setTimeout(() => {
            const staticQuestions = this.getData()
            this.setState({
                staticQuestions
            })
        }, 1000);
    }

    render() {
        return (
            <>
            <main>
                <Counter />
                <Hearts />
                <Questions />
            </main>
            <Footer />
        </>
        );
    }
}
export default App;
