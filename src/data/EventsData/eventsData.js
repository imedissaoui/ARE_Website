function importAll(r) {
  let cache = {};
  r.keys().forEach((key) => (cache[key] = r(key)));
  return Object.values(cache).map(value => {return value['default']})
}


const EVENTS = [
    {
        'name':'RoboCup',
        'description': "RoboCup is an event hosted by ENSI robotics association. It consists of different competitions that revolve around a general theme. Of course, each competition has specifications that participants need to follow. It targets young roboticists over the age of 18 who are interested in the robotic domain and want to test their innovative ideas in competitions, all while having the chance to win different prizes.It is an annual event that already had three editions but, due to the current situation of the world, and the fact that this event is all about meeting people all over the country."
        ,
        'edition': {
            "1.0": importAll(require.context('../../img/EVENTS/RoboCup/RoboCup1.0/', true, /\.jpg$/)),//["1","2","3","4","5","6","7","8","9","10","11","12"].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'}),
            "2.0": importAll(require.context('../../img/EVENTS/RoboCup/RoboCup2.0/', true, /\.jpg$/)),//["1","2","3","4","5","6","7","8","9","10","11","12"].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'}),
            "3.0": importAll(require.context('../../img/EVENTS/RoboCup/RoboCup3.0/', true, /\.jpg$/))//["1","2","3","4","5","6","7","8","9","10","11","12",'13','14','15','16','17','18','19','20','21','22','23','24','25','26','26','27','28','29','30','31'].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'})
        }
    },

    {
        'name':'SuperCup',
        'description': 'To help students relieve stress, forget about the obligations of our university life, and get to spend time with different amazing people, ENSI robotics association created SuperCup, an event full of fun activities, like karaoke and card games, but mainly it focuses on a football tournament in which everyone can participate.',
        'edition': {
            "1.0": importAll(require.context('../../img/EVENTS/SuperCup/SuperCup1.0/', true, /\.jpg$/)),//["1","2","3","4","5","6","7","8","9"].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'}),
            "2.0": importAll(require.context('../../img/EVENTS/SuperCup/SuperCup1.0/', true, /\.jpg$/))//["1","2","3","4","5","6","7","8","9","10","11","12",'13','14','15','16','17','18','19','20','21','22'].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'})
        }
    },

    {
        'name':'BootCamp',
        'description': 'Is your child interested in robotics? or are they curious about it and want to learn more? well, this is the right event where you can have fun but also learn about the innovate world of robotics. It also caters to their skill level. Introductory workshops and activities with other new learners helps children and the adolescent avoid feeling self-conscious and shy.',
        'edition': {
            "1.0": importAll(require.context('../../img/EVENTS/BootCamp/BootCamp1.0/', true, /\.jpg$/))//["1","2","3","4","5","6","7","8"].map((imgName)=>{ return path +'./RoboCup/RoboCup1.0/' + imgName + '.jpg'}),
        }
    }
];

export default EVENTS;