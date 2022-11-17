class AlarmClock {
    constructor () {
        this.alarmCollection = [];
        this.timeId  = null;
    }

    addClock(time, func, id) {
       if(!id) {
          throw new Error('error text');
       }

       if(this.alarmCollection.findIndex((alarm)=> alarm.id)) {
        console.error('');
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
    let alarmIndex = this.alarmCollection.findIndex((alarm) => alarm.id === id);
      
      if(!alarmIndex) {
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

     if(minutes < 10) {
     const time = `${hours}:0${minutes}`;
     return time;
    }
     else {
        const time = `${hours}:${minutes}`;
        return time;
    }
    }
}