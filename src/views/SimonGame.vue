<template>
  <div >
    <h3 class="text-center">Le jeu de Simon </h3>
    <hr>
    <button @click="newGame()">
      NOUVELLE PARTIE
    </button>
    <hr>
    {{score }}
    <hr>
    <div>
      <span @click='selectSquare("hautGauche")' class="carre" :class="{bleu:hautGauche}"></span>
      <span @click='selectSquare("hautDroite")' class="carre" :class="{rouge:hautDroite}"></span>
    </div>
    <div>
      <span @click='selectSquare("basGauche")' class="carre" :class="{vert:basGauche}"></span>
      <span @click='selectSquare("basDroite")' class="carre" :class="{jaune:basDroite}"></span>
    </div>
  </div>
</template>



<script>

export default {
  name: "SimonGame",
  data(){
    return{
      hautGauche:false,
      hautDroite:false,
      basGauche:false,
      basDroite:false,
      sequence:[],
      tempSeq:[],

      squareMapping:['hautGauche','hautDroite','basGauche','basDroite']
    }
  },
  methods: {
    newGame() {
      this.sequence = [];
      this.nextTurn()
    },
    allGray() {
      this.hautGauche = false;
      this.hautDroite = false,
      this.basGauche = false,
      this.basDroite = false
    },
    addNewElemToSequence() {
      this.sequence.push(this.squareMapping[Math.floor(Math.random() * 4)])
      this.tempSeq=this.sequence.slice();
    },
    nextTurn() {
      this.addNewElemToSequence();
      this.allGray();
      this.playSequence(this.tempSeq[0]);
      console.log(this.sequence)
    },
    playSequence(instruction) {
        this[instruction] = true;
        setTimeout(function () {
          this.allGray();
          //suppression du premier élément
          this.tempSeq.shift();
          if (this.tempSeq[0]) {
            setTimeout(function () {
            this.playSequence(this.tempSeq[0]);
            }.bind(this), 400);
          } else {
            this.tempSeq = this.sequence.slice();
            console.log('du coup plus d element')
          }
        }.bind(this), 400);

    },
    selectSquare(instruction){
      if(instruction===this.tempSeq[0]){
        this[instruction]=true;
        setTimeout(function () {
          this.allGray();
          this.tempSeq.shift()
          if (!this.tempSeq[0]) {
            this.nextTurn();
          }
        }.bind(this), 400);
      }
      else {
        alert("Perdu")
      }
    },
  },
  computed:{
    score(){
      const value = this.sequence.length -1
      return (value < 0)? 'score : 0' : 'score : '+  value ;
    }
  }
}
</script>
<style>

.carre {
  display: inline-block;
  width:200px;
  height:200px;
  margin: 0px 4px;
  background-color:#ccc;
  cursor:pointer;
}

.bleu {
  background-color:blue;
}
.rouge {
  background-color:red;
}
.vert {
  background-color:green;
}
.jaune {
  background-color:yellow;
}
</style>
