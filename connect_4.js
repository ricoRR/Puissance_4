class DoYouWannaPlay {
   
    constructor(data) {   
        this.div = document.getElementsByTagName("script")[0].parentElement
        this.data = data
    }
    
    start_new_game() {
        
        let question_div = document.createElement("div")
        this.div.appendChild(question_div)
        question_div.classList.add("question")
        
        let question = document.createElement("p")
        question_div.appendChild(question)
        question.textContent = "Would you like to play a game of connect 4 ?"
        
        let yes = document.createElement("button")
        question_div.appendChild(yes)
        yes.textContent = "Yes"
        yes.classList.add("bouton")

        let no = document.createElement("button")
        question_div.appendChild(no)
        no.textContent = "No"
        no.classList.add("bouton")
        
        yes.addEventListener("click", () => {
            question_div.innerHTML = ""
            this.choose_size_color()
        })
    }

    choose_size_color() {

        let question = document.getElementsByClassName("question")[0]
        question.innerHTML = ""
        let choose = document.createElement("p")
        question.appendChild(choose)
        choose.textContent = "Choose board size please"

        let form = document.createElement("form")
        question.appendChild(form)

        let input_x = document.createElement("input")
        form.appendChild(input_x)
        input_x.setAttribute("type", "number")
        input_x.setAttribute("value", "7")
        input_x.setAttribute("min", "5")

        let input_y = document.createElement("input")
        form.appendChild(input_y)
        input_y.setAttribute("type", "number")  
        input_y.setAttribute("value", "6")
        input_y.setAttribute("min", "4")

        let submit = document.createElement("button")
        question.appendChild(submit)
        submit.setAttribute("type", "button")
        submit.textContent = "Submit"

        let choose_color = document.createElement("p")
        form.appendChild(choose_color)
        choose_color.textContent = "Choose a color for player 1"

        let input_color_1 = document.createElement("input")
        form.appendChild(input_color_1)
        input_color_1.setAttribute("type", "radio")
        input_color_1.setAttribute("name", "color_1")
        input_color_1.setAttribute("id", "red")
        input_color_1.setAttribute("value", "red")
        input_color_1.setAttribute("checked", "checked")
        
        let label_input_1 = document.createElement("label")
        form.appendChild(label_input_1)
        label_input_1.setAttribute("for", "red")
        label_input_1.textContent = "Red"

        let input_color_2 = document.createElement("input")
        form.appendChild(input_color_2)
        input_color_2.setAttribute("type", "radio")
        input_color_2.setAttribute("name", "color_1")
        input_color_2.setAttribute("value", "green")
        input_color_2.setAttribute("id", "green")

        let label_input_2 = document.createElement("label")
        form.appendChild(label_input_2)
        label_input_2.setAttribute("for", "green")
        label_input_2.textContent = "Green"

        let input_name_1 = document.createElement("p")
        form.appendChild(input_name_1)
        input_name_1.textContent = "Choose a name for player 1"

        let input_1 = document.createElement("input")
        form.appendChild(input_1)
        input_1.setAttribute("type", "text")
        input_1.setAttribute("id", "name_1")

        let choose_color_2 = document.createElement("p")
        form.appendChild(choose_color_2)
        choose_color_2.textContent = "Choose a color for player 2"
        
        let input_color_3 = document.createElement("input")
        form.appendChild(input_color_3)
        input_color_3.setAttribute("type", "radio")
        input_color_3.setAttribute("name", "color_2")
        input_color_3.setAttribute("id", "yellow")
        input_color_3.setAttribute("value", "yellow")
        input_color_3.setAttribute("checked", "checked")

        let label_input_3 = document.createElement("label")
        form.appendChild(label_input_3)
        label_input_3.setAttribute("for", "yellow")
        label_input_3.textContent = "Yellow"

        let input_color_4 = document.createElement("input")
        form.appendChild(input_color_4)
        input_color_4.setAttribute("type", "radio")
        input_color_4.setAttribute("name", "color_2")
        input_color_4.setAttribute("id", "orange")
        input_color_4.setAttribute("value", "orange")

        let label_input_4 = document.createElement("label")
        form.appendChild(label_input_4)
        label_input_4.setAttribute("for", "orange")
        label_input_4.textContent = "Orange"

        let input_name_2 = document.createElement("p")
        form.appendChild(input_name_2)
        input_name_2.textContent = "Choose a name for player 2"

        let input_2 = document.createElement("input")
        form.appendChild(input_2)
        input_2.setAttribute("type", "text")
        input_2.setAttribute("id", "name_2")

        submit.addEventListener('click', (question) => {
            
            let color_1 = document.getElementById('red').checked
            let color_2 = document.getElementById('yellow').checked
            let color_p1;
            let color_p2;
            
            if(color_1 == false) {
                color_p1 = "green"
            }else {
                color_p1 = "red"
            }

            if(color_2 == false) {
                color_p2 = "orange"
            } else {
                color_p2 = "yellow"
            }
            
            let name_1 = document.getElementById('name_1')
            let name_2 = document.getElementById('name_2')
            
            this.data = {
                x: input_x.value,
                y: input_y.value,
                p1_color: color_p1,
                p2_color: color_p2,
                p1_name: name_1.value,
                p2_name: name_2.value,
                p1_score: 0,
                p2_score: 0
            }
            
            if(this.data.p1_name == ""  || this.data.p2_name == "") {
                window.alert('Please enter a name to continue.')
            }
            else {
                let Board = new Board_size(this.data)
                Board.create_board()
            }
        })        
    }   

    call_board() {

        let question = document.getElementsByClassName("question")[0]

        let restart = document.createElement('button')
        question.appendChild(restart)
        restart.textContent = "Restart"

        restart.addEventListener('click', () => {
            let board = new Board_size(this.data)
            board.create_board()
        })
    }
}

class Board_size extends DoYouWannaPlay {

    constructor(data) {
        super(data)
    }

    create_board() {

        let question = document.getElementsByClassName("question")[0]
        question.innerHTML= ""

        let title = document.createElement('h1')
        question.appendChild(title)
        title.textContent = "Connect 4"

        let w_count = document.createElement('h3')
        question.appendChild(w_count)
        w_count.textContent = this.data.p1_name + " " + this.data.p1_score + "-" + this.data.p2_score + " " + this.data.p2_name

        let table = document.createElement('table')
        question.appendChild(table)

        let css = document.createElement('style')
        css.innerHTML = "table, th, tr{border: 2px solid black;border-collapse: collapse; th{width:40px;height:40px;}}"
    
        document.body.appendChild(css)

        let r = 0
        
        for(let i = 0; i < this.data.y; i++) {
            let row = document.createElement('tr')
            table.appendChild(row)
            
            for(let n = 0; n < this.data.x; n++) { 
                let head = document.createElement('th')
                row.appendChild(head)
                head.setAttribute('id', i + "_" + n)
                head.textContent = "0"
                head.style.color = 'transparent'
            }
        }

        let restart = document.createElement('button')
        question.appendChild(restart)
        restart.textContent = "Restart"

        restart.addEventListener('click', () => {
            this.create_board()
        })

        let call = new Turn(this.data)
        call.which_turn()
    }
}

class Turn extends DoYouWannaPlay {

    constructor(data) {
        super(data)
    }

    which_turn() {
        
        let question = document.getElementsByClassName("question")[0]
        let display = document.createElement('h3')
        question.appendChild(display)
        display.setAttribute('id', 'turn')
        this.data['turn'] = 1
        this.data['current'] = 1
        this.data['display'] = display

        this.turn_display()
        this.play()
    }
    
    turn_display() {

        if(this.data.turn % 2 == 0){
            this.data.display.textContent = this.data.p2_name + "'s turn"
            this.data.current = 2
        } else {
            this.data.current = 1
            this.data.display.textContent = this.data.p1_name + "'s turn" 
        }
        this.data.turn += 1
        return this.data
    }

    play() {
        
        let table = document.getElementsByTagName('table')[0]

        table.addEventListener('click', (e) => {
            let cell = e.target.id
            let sli = cell.split("_")[1]
            this.place_token(sli)
            this.turn_display()
        })
    }
    
    place_token(sli) {
        
        let test = this.data.y - 1 
        let draw = (parseInt(this.data.x) * parseInt(this.data.y)) + 1
        
        
        if(this.data.turn >= draw) {
            let question = document.getElementsByClassName("question")[0]
            let draw_text = document.createElement('h2')
            question.appendChild(draw_text)
            draw_text.textContent= "Its A Draw"
        }
        
        for(let i = test; i >= 0; i--) {
            let targ = document.getElementById(i + "_" + sli)
            
            if(targ.textContent == "0") {

                if(this.data.current == 1) {
                    targ.textContent = this.data.current
                    targ.style.backgroundColor = this.data.p1_color
                    targ.style.color = 'transparent'
                }else {
                    targ.textContent = this.data.current
                    targ.style.backgroundColor = this.data.p2_color
                    targ.style.color = 'transparent'
                }
                
                if(this.data.turn > 7) {
                    this.check_win(targ, sli)
                }
                return
            }
        }
        
        
    }

    check_win(targ, sli) {
        
        let spl = parseInt(targ.id.split("_")[0])
        let m_spl = parseInt(spl) - 3
        let p_spl = parseInt(spl) + 3
        
        let l_row = parseInt(targ.id.split("_")[1])
        let m_row = parseInt(l_row) - 3
        let p_row = parseInt(l_row) + 4
        
        let ar
        let ar2
        let ar_desc = []
        let ar_asc = []

        for(let i = spl; i < this.data.y; i++) {
            let char = document.getElementById(i + "_" + sli)
            let a = char.textContent
            if(char !== null) {
                ar += a
            }
        }
        
        for(let i = m_row; i < p_row; i++) {
            let char = document.getElementById(spl + "_" + i)
            if(char !== null){
                let w = char.textContent
                ar2 += w
            }
        }
        
        let nw = parseInt(targ.id.split("_")[0])
        let nr = parseInt(targ.id.split("_")[1])

        for(let i = 0; i < 8; i++) {
            let char = document.getElementById(m_spl + "_" + m_row)
            if(char !== null){
                let v = char.textContent
                ar_desc.push(v)
            }
            m_spl++
            m_row++
        }
        
        for(let i = 0; i < 4; i++) {
            let char = document.getElementById(spl + "_" + l_row)
            if(char !== null) {
                let d = char.textContent
                ar_asc.push(d)
            }
            spl++
            l_row--
        }

        for(let i = 0; i < 4; i++) {
            nw--
            nr++
            let char = document.getElementById(nw + "_" + nr)
            if(char !== null) {
                let d = char.textContent
                ar_asc.push(d)
            }
        }

        let ar_d = ar_desc.join().replaceAll(",", "")
        let ar_a = ar_asc.join().replaceAll(",", "")

        if(ar.includes('1111') || ar.includes('2222') || ar2.includes('1111') || ar2.includes('2222')) {
            this.winner()
        }

        if(ar_d.includes('1111') || ar_d.includes('2222') || ar_a.includes('1111') || ar_a.includes('2222')) {
            this.winner()
        }
    }

    winner() {
        
        let question = document.getElementsByClassName("question")[0]

        if(this.data.current == 1) {
            this.data.p1_score++
            question.innerHTML = this.data.p1_name + " Won"
        } else {
            this.data.p2_score++
            question.innerHTML = this.data.p2_name + " Won"    
        } 

        this.call_board()
    }
}

let p = new DoYouWannaPlay()
window.onload = p.start_new_game()