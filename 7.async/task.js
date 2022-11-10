class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timeId  = null;
    }

    addClock(time, func, id) {
       if(!id) {
          throw new Error('error text');
       }

       if(this.alarmCollection[id]) {
        console.error();
        return;
       }
       else {
        let object = {
            id,
            time,
            func,
        }
       this.alarmCollection.push(object);
        return;
       }
    }

    removeClock(id) {
     id = this.alarmCollection.filter((id) => this.alarmCollection.splice(id));
      
      if(!id) {
            return false;
        }
        else {
            return true;
        }

    }

    getCurrentFormattedTime() {
     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const time = `${hours}:0${minutes}`;

     return time;
    }
}