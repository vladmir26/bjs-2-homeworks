class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timeId  = null;
    }

    addClock(time, func, id) {
       if(!id) {
          throw new Error('error text');
       }

       if(this.alarmCollection.findIndex((alarm)=> alarm.id) === -1) {
            console.error('');
       }
       else {
            let object = {
              id,
              time,
              func,
            }
            this.alarmCollection.push(object);
        }
    }

    removeClock(id) {
    let alarmIndex = this.alarmCollection.findIndex((alarm) => alarm.id === id);
      
        if(alarmIndex === -1) {
            return false;
        }
        else {
            this.alarmCollection.splice(alarmIndex, 1);
            return true;
        }

    }

    getCurrentFormattedTime() {
       const date = new Date();
       const hours = date.getHours();
       const minutes = date.getMinutes();
       
       let time = minutes < 10 ? `${hours}:0${minutes}` : `${hours}:${minutes}`;
       return time;
    }

    

      checkClock({id, time, func}) {

         if(time === this.getCurrentFormattedTime) {
            func();
        }
      } 

      start() { 
          
        if(this.timeId == null) {
           this.timeId = setInterval(this.alarmCollection.forEach((alarm) => {
                this.checkClock(alarm)
            }), 5000);
        }

      }

      stop() {
          if(this.timeId === id) {
            clearInterval(id);

            this.timeId = null;
          }
      }

}