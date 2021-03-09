function formatStatistic(stat: string | number) {
    if (typeof stat === "string") { 
      return stat.toUpperCase()
    }  else { 
      return stat.toFixed(2);
    }
 }
 
 console.log(formatStatistic('Win'));
 console.log(formatStatistic(0.364));