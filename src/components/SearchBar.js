import React from 'react';

class SearchBar extends React.Component{
    state={term:''}
    onFormsubmit=(e)=>{
        e.preventDefault();
        this.props.onSearchTermSubmit(this.state.term);
    }
    render(){
        return(
            <div className="ui segment">
                <form onSubmit={(e)=>this.onFormsubmit(e)} className="ui form">
                    <div className="field">
                        <label>Search Movie</label>
                        <input type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar;