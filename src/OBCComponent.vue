<template>
  <div class="obc">
    <div class="game-turn" v-for="turn in maxTurn">
      <div :class="{'turn-counter': turn ==   currentTurn}">Turn {{ turn }}</div>
      <div v-for="(units, key) in unitsThisTurn(turn)">
        {{key}}
        <units-component :myunits="units"></units-component>
      </div>
    </div>
    <div class="close" @click.stop="closeMe">X</div>
  </div>
</template>

<script>
export default {
  name: "OBCComponent",
  props:['obc'],
  mounted(){
    debugger;
  },
  methods:{
    closeMe(){
      clickThrough.menuClick('showObc')
    }
  },
  computed:{
    unitsThisTurn(){
      debugger;
      return (turn) => {
        debugger;
        const ret = {};
        for(const i in this.obc) {
          debugger;
          const regEx = new RegExp("^gameTurn"+turn);
          if(i.match(regEx)){
            ret[i.replace(/^gameTurn[0-9]+/,"")] = (this.obc[i]);
            debugger
          }
        }
        return ret;
      }
    },
    currentTurn(){
      return this.$store.state.headerData.turn;
    },
    maxTurn(){
      return this.$store.state.headerData.maxTurn;
    },
    gameTurns(){
      let turns = _.filter(this.obc, (item, key) =>{
        if(key.match(/^gameTurn/)){
          return true;
        }
        return false;
      });
    }
  }
}
</script>

<style lang="scss">
.obc {
  display:flex;
  position: absolute;
  z-index: 10;
  background: white;
  margin-top: 3em;
  padding:10px;

  .game-turn{
    width: 40px;
    margin: 0 10px;
  }
  .turn-counter{
    background-color:mediumaquamarine;
  }
  .unit {
    position: relative;
    margin-left:15px;
    pointer-events: none;
  }
}
</style>