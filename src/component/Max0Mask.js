import React from 'react'

class Max0Mask extends React.Component {
    constructor(props) {
        super(props)
        this.state = {...props.data}
    }

    getBinary = n => n.toString(2).padStart(8,'0')

    getBinaryAdress = adress => adress.map(el=>this.getBinary(el)).join('.')

    getBinaryMask = () => {
      let minMask = this.getBinaryAdress(this.state.minMask)
      let maxMask = this.getBinaryAdress(this.state.maxMask)

      let mask = [].map.call(minMask,(el, i)=>(minMask[i]===maxMask[i]) ? el : '*')
      
      return mask
    }

    showAnswer = () => this.setState({showAnswer: !this.state.showAnswer})

    render() {
        return (
          <div>
            <p>Для узла с IP адресом {this.state.ip.join('.')} адрес сети равен {this.state.net.join('.')}. Найдите наибольшее возможное количество нулей в двоичной записи маски подсети.</p>
            <p onClick={this.showAnswer}><span className='hintButton'>Решение:</span></p>
            <div className={this.state.showAnswer ? '' : 'hide'}>
              <p>Запишем IP адрес и адрес сети в двоичном виде. Подберём значения в маске так, чтобы выполнялась поразрядная конъюнкция.</p>
              <p className='code'><span className='bold'>IP&nbsp;&nbsp;</span> {this.getBinaryAdress(this.state.ip)}<br/>
              <span className='bold'>Mask</span> <span className='important'>{this.getBinaryMask()}</span><br/>
              <span className='bold'>Net&nbsp;</span> {this.getBinaryAdress(this.state.net)}</p>
              <p>Наибольшее количество нулей в маске - {32-this.state.minCount}</p>
              <p><span className='bold'>Ответ:</span> {32-this.state.minCount}</p>
            </div>
          </div>
        );
      }
}

export default Max0Mask