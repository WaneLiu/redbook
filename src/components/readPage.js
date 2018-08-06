import React, {PureComponent} from 'react'

class Read extends PureComponent {
    constructor(props) {
        super(props)
        const docEl = document.body
        docEl.style.background =  '#d1d6be'
        this.data = this.props.location.state;
        this.type = this.data ? this.data.type : -1
        this.bookId = this.data ? this.data.bookId : -1
        this.bookName = this.data ? this.data.bookName : -1
    }

    componentWillUnmount() {
        document.body.style.background = 'white' 
    }

    render() {
        return (
            <div>hhh</div>
        )
    }
}

export default Read