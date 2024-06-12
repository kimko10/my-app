import React from "react";

class ConfirmButton extends React.Component {
    constructor(props) {
        super(props);

         this.state = {
            isConfirmed: false,
         };
         // class컴포넌트 bind Version
         // this.handleConfirm = this.handleConfirm.bind(this);

    }

    // class컴포넌트 bind Version
    // handleConfirm() {
    //     this.setState((prevState) => ({
    //         isConfirmed: !prevState.isConfirmed,
    //     }));
    // }

    // class컴포넌트 Class fields syntax Version
    // 이렇게 arrow를 사용하면 this가 인스턴스를 가르키기때문에 bind가 필요없는것인듯?
    handleConfirm = () => {
        this.setState((prevState) => ({
            isConfirmed: !prevState.isConfirmed,
        }));
    }

    render() {
        return (
            <button onClick={this.handleConfirm}
            disabled={this.state.isConfirmed}
                >
            {this.state.isConfirmed ? "확인됨" : "확인하기"}
            </button>
        );
    }
}

export default ConfirmButton;