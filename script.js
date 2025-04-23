// ========== DATENMODELLE ==========  

// Meilensteine  
const milestones = [  
  { id: 1, name: "Gallifrey", points: 400, reached: false, icon: "🌌", description: "Die Heimatwelt der Time Lords" },  
  { id: 2, name: "Neverwinter", points: 600, reached: false, icon: "🏰", description: "Die berühmte Stadt aus D&D" },  
  { id: 3, name: "Winterfell", points: 800, reached: false, icon: "❄️", description: "Die ikonische Festung aus Game of Thrones" },  
  { id: 4, name: "Hogsmeade", points: 1000, reached: false, icon: "✨", description: "Das magische Dorf aus Harry Potter" },  
  { id: 5, name: "Prag", points: 1500, reached: false, icon: "🏙️", description: "Die ultimative Reise" },  
];  

// Elefanten-Sets  
const elephantSets = [  
  {  
    id: "safari",  
    name: "Safari Abenteuer",  
    description: "Elefanten aus der afrikanischen Savanne",  
    elephantIds: [1, 7, 12, 18, 24],  
    bonusPoints: 50,  
    completed: false,  
    icon: "🌍"  
  },  
  {  
    id: "jungle",  
    name: "Dschungel-Erkunder",  
    description: "Elefanten aus den tropischen Regenwäldern",  
    elephantIds: [2, 8, 15, 22, 29],  
    bonusPoints: 50,  
    completed: false,  
    icon: "🌴"  
  },  
  {  
    id: "fantasy",  
    name: "Mystische Wesen",  
    description: "Elefanten aus Fantasiewelten",  
    elephantIds: [3, 11, 33, 44, 51],  
    bonusPoints: 50,  
    completed: false,  
    icon: "✨"  
  },  
  {  
    id: "historical",  
    name: "Historische Legenden",  
    description: "Berühmte Elefanten aus der Geschichte",  
    elephantIds: [5, 19, 37, 46, 55],  
    bonusPoints: 50,  
    completed: false,  
    icon: "📜"  
  },  
  {  
    id: "arctic",  
    name: "Frostige Freunde",  
    description: "Elefanten aus kalten Regionen",  
    elephantIds: [4, 14, 26, 40, 60],  
    bonusPoints: 50,  
    completed: false,  
    icon: "❄️"  
  }  
];  

// Elefanten  
const elephants = [  
  // Safari Set  
  {  
    id: 1,  
    name: "Grauer Weiser",  
    difficulty: "easy",  
    rarity: "common",  
    basePoints: 10,  
    bonusPoints: 0,  
    setId: "safari",  
    collected: true,  
    dateCollected: "2025-03-15",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  {  
    id: 7,  
    name: "Wüstenwanderer",  
    difficulty: "easy",  
    rarity: "rare",  
    basePoints: 10,  
    bonusPoints: 10,  
    setId: "safari",  
    collected: true,  
    dateCollected: "2025-03-18",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  {  
    id: 12,  
    name: "Savannen-König",  
    difficulty: "medium",  
    rarity: "legendary",  
    basePoints: 20,  
    bonusPoints: 25,  
    setId: "safari",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  {  
    id: 18,  
    name: "Tusker",  
    difficulty: "medium",  
    rarity: "common",  
    basePoints: 20,  
    bonusPoints: 0,  
    setId: "safari",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  {  
    id: 24,  
    name: "Wächter des Wassers",  
    difficulty: "hard",  
    rarity: "rare",  
    basePoints: 30,  
    bonusPoints: 10,  
    setId: "safari",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  
  // Jungle Set  
  {  
    id: 2,  
    name: "Elfenbeinhüter",  
    difficulty: "easy",  
    rarity: "common",  
    basePoints: 10,  
    bonusPoints: 0,  
    setId: "jungle",  
    collected: true,  
    dateCollected: "2025-03-20",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  {  
    id: 8,  
    name: "Waldriese",  
    difficulty: "medium",  
    rarity: "common",  
    basePoints: 20,  
    bonusPoints: 0,  
    setId: "jungle",  
    collected: true,  
    dateCollected: "2025-04-01",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  {  
    id: 15,  
    name: "Dschungelschatten",  
    difficulty: "hard",  
    rarity: "legendary",  
    basePoints: 30,  
    bonusPoints: 25,  
    setId: "jungle",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  {  
    id: 22,  
    name: "Laubrüssler",  
    difficulty: "easy",  
    rarity: "common",  
    basePoints: 10,  
    bonusPoints: 0,  
    setId: "jungle",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  {  
    id: 29,  
    name: "Tropenfinder",  
    difficulty: "medium",  
    rarity: "rare",  
    basePoints: 20,  
    bonusPoints: 10,  
    setId: "jungle",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  
  // Fantasy Set  
  {  
    id: 3,  
    name: "Nebelwandler",  
    difficulty: "medium",  
    rarity: "rare",  
    basePoints: 20,  
    bonusPoints: 10,  
    setId: "fantasy",  
    collected: true,  
    dateCollected: "2025-03-25",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  {  
    id: 11,  
    name: "Sternenelefant",  
    difficulty: "hard",  
    rarity: "legendary",  
    basePoints: 30,  
    bonusPoints: 25,  
    setId: "fantasy",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  {  
    id: 33,  
    name: "Mondschattenpfad",  
    difficulty: "medium",  
    rarity: "common",  
    basePoints: 20,  
    bonusPoints: 0,  
    setId: "fantasy",  
    collected: false,  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: false  
  },  
  
  // Historical Set  
  {  
    id: 5,  
    name: "Hannibal",  
    difficulty: "medium",  
    rarity: "legendary",  
    basePoints: 20,  
    bonusPoints: 25,  
    setId: "historical",  
    collected: true,  
    dateCollected: "2025-03-10",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  },  
  
  // Arctic Set  
  {  
    id: 4,  
    name: "Frosttusker",  
    difficulty: "hard",  
    rarity: "rare",  
    basePoints: 30,  
    bonusPoints: 10,  
    setId: "arctic",  
    collected: true,  
    dateCollected: "2025-03-05",  
    imageUrl: "https://via.placeholder.com/180",  
    cardUnlocked: true  
  }  
];  

// Belohnungskategorien  
const rewardCategories = [  
  {  
    id: "small",  
    name: "Kleine Belohnungen",  
    description: "Verbrauchen 25-100 Punkte",  
    rewards: [  
      { id: 1, name: "Long Rest", description: "Eine Stunde ungestörte Gaming-Zeit", points: 25, icon: "🎮" },  
      { id: 2, name: "Bardic Inspiration", description: "Du bringst ihm einen Snack und Getränk während er spielt/liest", points: 25, icon: "🥤" },  
      { id: 3, name: "Sonic Screwdriver Service", description: "Eine Tasse seines Lieblingsgetränks zubereiten und servieren", points: 25, icon: "☕" },  
    ]  
  },  
  {  
    id: "medium",  
    name: "Mittlere Belohnungen",  
    description: "Verbrauchen 150-300 Punkte",  
    rewards: [  
      { id: 17, name: "Adventuring Party", description: "Spieleabend mit Freunden (du organisierst alles)", points: 150, icon: "👥" },  
      { id: 18, name: "Heroes' Feast Weekend", description: "Ein Wochenende lang seine Lieblingsgerichte kochen", points: 150, icon: "🍽️" },  
    ]  
  },  
  {  
    id: "milestone",  
    name: "Meilenstein-Belohnungen",  
    description: "Verbrauchen keine Punkte, werden bei Erreichen von Meilensteinen freigeschaltet",  
    rewards: [  
      { id: 33, name: "Rare Magic Item", description: "Ein spezielles Buch/Spiel, das er sich wünscht", points: 400, milestone: "Gallifrey", icon: "📘" },  
      { id: 34, name: "Doctor's Care Package", description: "Überraschungspaket mit mehreren kleinen Fandom-Dingen", points: 400, milestone: "Gallifrey", icon: "📦" },  
    ]  
  }  
];
// ========== HAUPTKOMPONENTEN ==========  

// Header-Komponente  
function Header({ showSettings, setShowSettings }) {  
  return (  
    <header className="bg-blue-800 p-4 border-b-4 border-yellow-400 relative overflow-hidden">  
      <div className="absolute top-0 left-0 w-full h-full opacity-10">  
        {[...Array(50)].map((_, i) => (  
          <div   
            key={i}   
            className="absolute bg-white rounded-full"   
            style={{  
              width: Math.random() * 3 + 1 + "px",  
              height: Math.random() * 3 + 1 + "px",  
              top: Math.random() * 100 + "%",  
              left: Math.random() * 100 + "%",  
              animationDuration: Math.random() * 3 + 2 + "s",  
            }}  
          />  
        ))}  
      </div>  
      <div className="flex justify-between items-center relative z-10">  
        <div className="flex items-center">  
          <div className="w-12 h-16 bg-blue-600 relative mr-3 border border-white rounded-sm">  
            <div className="absolute top-0 w-full text-center text-xs bg-white text-blue-800 font-bold">POLICE</div>  
            <div className="absolute bottom-0 w-full text-center text-xs bg-white text-blue-800 font-bold">BOX</div>  
            <div className="grid grid-cols-2 gap-1 p-1 absolute top-4 left-0 right-0">  
              {[...Array(6)].map((_, i) => (  
                <div key={i} className="w-full h-2 bg-white" />  
              ))}  
            </div>  
          </div>  
          <h1 className="text-2xl font-bold">TARDIS Quest Tracker</h1>  
        </div>  
        <button   
          onClick={() => setShowSettings(!showSettings)}   
          className="p-2 bg-blue-700 rounded-full hover:bg-blue-600 transition-colors"  
        >  
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>  
        </button>  
      </div>  
    </header>  
  );  
}  

// Einstellungsbereich  
function SettingsPanel({ addPoints, resetPoints }) {  
  return (  
    <div className="bg-blue-900 p-4 border-b border-blue-700 flex justify-between items-center">  
      <div className="flex gap-4">  
        <button   
          onClick={() => addPoints(25)}   
          className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-sm"  
        >  
          +25 Punkte  
        </button>  
        <button   
          onClick={() => addPoints(50)}   
          className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-sm"  
        >  
          +50 Punkte  
        </button>  
        <button   
          onClick={() => addPoints(100)}   
          className="px-3 py-1 bg-green-600 hover:bg-green-500 rounded text-sm"  
        >  
          +100 Punkte  
        </button>  
      </div>  
      <button   
        onClick={resetPoints}   
        className="px-3 py-1 bg-red-600 hover:bg-red-500 rounded text-sm flex items-center gap-1"  
      >  
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m2 12 5 5 5-5"></path><path d="M7 6v11"></path><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>  
        Reset  
      </button>  
    </div>  
  );  
}  

// Character Sheet  
function CharacterSheet({ totalPoints, availablePoints }) {  
  return (  
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg p-5 shadow-lg mb-8 border border-blue-700">  
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">  
        <div className="text-center md:text-left">  
          <h2 className="text-xl font-bold mb-1">Abenteurer-Pass</h2>  
          <p className="text-blue-300 text-sm">Deine Reise durch Raum und Zeit</p>  
        </div>  
        <div className="flex gap-6">  
          <div className="text-center">  
            <p className="text-sm text-blue-300">Gesamtpunkte</p>  
            <p className="text-3xl font-bold text-yellow-400">{totalPoints}</p>  
          </div>  
          <div className="text-center">  
            <p className="text-sm text-blue-300">Verfügbare Punkte</p>  
            <p className="text-3xl font-bold text-green-400">{availablePoints}</p>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  

// Haupt-Navigationstabs  
function NavigationTabs({ activeTab, setActiveTab }) {  
  return (  
    <div className="flex mb-6 border-b border-blue-800">  
      <button   
        className={`px-4 py-2 flex items-center gap-2 ${activeTab === 'progress' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
        onClick={() => setActiveTab('progress')}  
      >  
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"></path><path d="M12 17.8 18.2 21 17 14.1l5-4.8-7-1L12 2"></path></svg>  
        Fortschritt  
      </button>  
      <button   
        className={`px-4 py-2 flex items-center gap-2 ${activeTab === 'rewards' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
        onClick={() => setActiveTab('rewards')}  
      >  
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>  
        Spellbook of Rewards  
      </button>  
      <button   
        className={`px-4 py-2 flex items-center gap-2 ${activeTab === 'elephants' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
        onClick={() => setActiveTab('elephants')}  
      >  
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="3" y2="21"></line><line x1="15" x2="15" y1="3" y2="21"></line></svg>  
        Elefantensammlung  
      </button>  
    </div>  
  );  
}
// ========== TAB-KOMPONENTEN ==========  

// Fortschritts-Tab  
function ProgressTab({ totalPoints, userMilestones }) {  
  // Nächsten nicht erreichten Meilenstein finden  
  const nextMilestone = userMilestones.find(m => !m.reached);  

  return (  
    <div className="mb-8">  
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">  
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M19 17v4"></path><path d="M3 5h4"></path><path d="M17 19h4"></path></svg>  
        Deine TARDIS-Reise  
      </h2>  
      
      {/* Journey Path */}  
      <div className="relative mt-12 mb-16">  
        {/* Path Line */}  
        <div className="absolute top-14 left-0 right-0 h-2 bg-blue-800 rounded-full z-0">  
          <div   
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full transition-all duration-1000 ease-out"  
            style={{ width: `${Math.min(100, (totalPoints / 1500) * 100)}%` }}  
          />  
        </div>  
        
        {/* Milestones */}  
        <div className="flex justify-between relative z-10">  
          {userMilestones.map((milestone, index) => (  
            <div key={milestone.id} className="flex flex-col items-center" style={{ width: `${100 / userMilestones.length}%` }}>  
              <div   
                className={`w-16 h-16 flex items-center justify-center text-2xl rounded-full mb-2 transition-all ${  
                  milestone.reached   
                    ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-blue-900 border-4 border-white shadow-lg'   
                    : 'bg-blue-800 text-blue-400 border border-blue-700'  
                }`}  
              >  
                {milestone.icon}  
              </div>  
              <div className={`text-sm font-bold ${milestone.reached ? 'text-yellow-300' : 'text-blue-300'}`}>  
                {milestone.name}  
              </div>  
              <div className="text-xs mt-1">{milestone.points} Punkte</div>  
              
              {milestone.reached && (  
                <div className="mt-1 bg-blue-800 px-2 py-1 rounded-full text-xs text-yellow-300 flex items-center">  
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"></path><path d="M12 17.8 18.2 21 17 14.1l5-4.8-7-1L12 2"></path></svg>  
                  Erreicht!  
                </div>  
              )}  
            </div>  
          ))}  
        </div>  
      </div>  
      
      {/* Next Milestone */}  
      {totalPoints < 1500 && (  
        <div className="bg-blue-900 rounded-lg p-4 border border-blue-700 mb-8">  
          <h3 className="text-lg font-bold mb-2">Nächstes Ziel:</h3>  
          {nextMilestone ? (  
            <div className="flex items-center gap-4">  
              <div className="w-12 h-12 flex items-center justify-center text-xl bg-blue-800 rounded-full">  
                {nextMilestone.icon}  
              </div>  
              <div>  
                <p className="font-bold">{nextMilestone.name}</p>  
                <p className="text-sm text-blue-300">{nextMilestone.description}</p>  
                <p className="text-xs mt-1">  
                  Noch {nextMilestone.points - totalPoints} Punkte bis zum Erreichen!  
                </p>  
              </div>  
            </div>  
          ) : (  
            <p>Alle Meilensteine erreicht! Glückwunsch!</p>  
          )}  
        </div>  
      )}  
      
      {/* Reached Milestones */}  
      {userMilestones.some(m => m.reached) && (  
        <div className="bg-blue-900 rounded-lg p-4 border border-blue-700">  
          <h3 className="text-lg font-bold mb-2">Erreichte Meilensteine:</h3>  
          <div className="space-y-3">  
            {userMilestones.filter(m => m.reached).map(milestone => (  
              <div key={milestone.id} className="flex items-center gap-4 bg-blue-800 p-2 rounded-lg">  
                <div className="w-10 h-10 flex items-center justify-center text-lg bg-gradient-to-r from-yellow-500 to-yellow-300 text-blue-900 rounded-full">  
                  {milestone.icon}  
                </div>  
                <div>  
                  <p className="font-bold">{milestone.name}</p>  
                  <p className="text-xs text-blue-300">{milestone.points} Punkte • {milestone.description}</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      )}  
    </div>  
  );  
}  

// Belohnungsbuch  
function RewardBook({ availablePoints, showCategory, setShowCategory, rewardCategories }) {  
  return (  
    <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg border border-blue-700 overflow-hidden">  
      {/* Spellbook Cover */}  
      <div className="bg-gradient-to-r from-indigo-800 to-purple-900 p-4 border-b border-blue-700">  
        <div className="flex justify-between items-center">  
          <div>  
            <h3 className="text-lg font-bold">Verfügbare Punkte: {availablePoints}</h3>  
            <p className="text-sm text-blue-300">Wähle eine Kategorie, um Belohnungen anzuzeigen</p>  
          </div>  
          <div className="bg-yellow-400 text-blue-900 rounded-full px-3 py-1 text-sm font-bold flex items-center">  
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect width="20" height="5" x="2" y="7"></rect><line x1="12" x2="12" y1="22" y2="7"></line><path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"></path><path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>  
            Belohnungen einlösen  
          </div>  
        </div>  
      </div>  
      
      {/* Reward Categories */}  
      <div className="divide-y divide-blue-800">  
        {rewardCategories.map(category => (  
          <div key={category.id} className="overflow-hidden">  
            {/* Category Header */}  
            <button   
              className="w-full p-4 text-left flex justify-between items-center hover:bg-blue-800/30"  
              onClick={() => setShowCategory(showCategory === category.id ? null : category.id)}  
            >  
              <div>  
                <h4 className="font-bold">{category.name}</h4>  
                <p className="text-sm text-blue-300">{category.description}</p>  
              </div>  
              {showCategory === category.id ? (  
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 15-6-6-6 6"></path></svg>  
              ) : (  
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"></path></svg>  
              )}  
            </button>  
            
            {/* Rewards List */}  
            {showCategory === category.id && (  
              <div className="bg-blue-950/50 p-4 grid grid-cols-1 md:grid-cols-2 gap-3">  
                {category.rewards.map(reward => (  
                  <div   
                    key={reward.id}   
                    className={`p-3 rounded-lg border flex items-center gap-3 ${  
                      category.id !== "milestone" && availablePoints >= reward.points   
                        ? 'bg-blue-800/50 border-blue-700 hover:bg-blue-800 cursor-pointer'   
                        : 'bg-blue-900/30 border-blue-800 opacity-70'  
                    }`}  
                  >  
                    <div className={`w-10 h-10 flex items-center justify-center rounded-full text-lg ${  
                      category.id !== "milestone" && availablePoints >= reward.points   
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-300 text-blue-900'   
                        : 'bg-blue-800 text-blue-300'  
                    }`}>  
                      {reward.icon}  
                    </div>  
                    <div className="flex-1">  
                      <div className="flex justify-between">  
                        <h5 className="font-bold">{reward.name}</h5>  
                        <span className={`text-sm font-bold ${  
                          category.id !== "milestone" && availablePoints >= reward.points   
                            ? 'text-green-400'   
                            : 'text-blue-400'  
                        }`}>  
                          {reward.points} {category.id === "milestone" ? `(${reward.milestone})` : "Punkte"}  
                        </span>  
                      </div>  
                      <p className="text-xs text-blue-300">{reward.description}</p>  
                    </div>  
                  </div>  
                ))}  
              </div>  
            )}  
          </div>  
        ))}  
      </div>  
    </div>  
  );  
}  

// Belohnungen-Tab  
function RewardsTab({ availablePoints, showRewardCategory, setShowRewardCategory, rewardCategories }) {  
  return (  
    <div>  
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2">  
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-400"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>  
        Spellbook of Rewards  
      </h2>  
      
      <RewardBook   
        availablePoints={availablePoints}   
        showCategory={showRewardCategory}  
        setShowCategory={setShowRewardCategory}  
        rewardCategories={rewardCategories}  
      />  
    </div>  
  );  
}
// ========== ELEFANTENSAMMLUNG HAUPTKOMPONENTE ==========  

// Elefantensammlung  
function ElephantCollection({ elephants, elephantSets, totalPoints }) {  
  const [activeSubTab, setActiveSubTab] = React.useState("gallery");  
  const [filteredElephants, setFilteredElephants] = React.useState([]);  
  const [filterDifficulty, setFilterDifficulty] = React.useState("all");  
  const [filterRarity, setFilterRarity] = React.useState("all");  
  const [filterSetId, setFilterSetId] = React.useState("all");  
  const [filterCollected, setFilterCollected] = React.useState("all");  
  const [sortBy, setSortBy] = React.useState("id");  
  const [searchQuery, setSearchQuery] = React.useState("");  
  const [selectedElephant, setSelectedElephant] = React.useState(null);  
  const [showElephantDetail, setShowElephantDetail] = React.useState(false);  

  // Aktualisiere die gefilterten Elefanten, wenn sich Filter ändern  
  React.useEffect(() => {  
    let filtered = [...elephants];  
    
    // Filter nach Schwierigkeit  
    if (filterDifficulty !== "all") {  
      filtered = filtered.filter(elephant => elephant.difficulty === filterDifficulty);  
    }  
    
    // Filter nach Seltenheit  
    if (filterRarity !== "all") {  
      filtered = filtered.filter(elephant => elephant.rarity === filterRarity);  
    }  
    
    // Filter nach Set  
    if (filterSetId !== "all") {  
      filtered = filtered.filter(elephant => elephant.setId === filterSetId);  
    }  
    
    // Filter nach Sammelstatus  
    if (filterCollected !== "all") {  
      const isCollected = filterCollected === "collected";  
      filtered = filtered.filter(elephant => elephant.collected === isCollected);  
    }  
    
    // Suche nach Name oder ID  
    if (searchQuery) {  
      filtered = filtered.filter(elephant =>   
        elephant.name.toLowerCase().includes(searchQuery.toLowerCase()) ||   
        elephant.id.toString() === searchQuery  
      );  
    }  
    
    // Sortierung  
    filtered.sort((a, b) => {  
      switch (sortBy) {  
        case "id":  
          return a.id - b.id;  
        case "name":  
          return a.name.localeCompare(b.name);  
        case "points":  
          const pointsA = a.basePoints + a.bonusPoints;  
          const pointsB = b.basePoints + b.bonusPoints;  
          return pointsB - pointsA;  
        case "date":  
          if (!a.collected) return 1;  
          if (!b.collected) return -1;  
          return new Date(b.dateCollected) - new Date(a.dateCollected);  
        default:  
          return 0;  
      }  
    });  
    
    setFilteredElephants(filtered);  
  }, [elephants, filterDifficulty, filterRarity, filterSetId, filterCollected, searchQuery, sortBy]);  

  // Berechne Statistiken  
  const stats = {  
    total: elephants.length,  
    collected: elephants.filter(e => e.collected).length,  
    byDifficulty: {  
      easy: elephants.filter(e => e.difficulty === "easy" && e.collected).length,  
      medium: elephants.filter(e => e.difficulty === "medium" && e.collected).length,  
      hard: elephants.filter(e => e.difficulty === "hard" && e.collected).length,  
    },  
    byRarity: {  
      common: elephants.filter(e => e.rarity === "common" && e.collected).length,  
      rare: elephants.filter(e => e.rarity === "rare" && e.collected).length,  
      legendary: elephants.filter(e => e.rarity === "legendary" && e.collected).length,  
    },  
    completedSets: elephantSets.filter(set =>   
      set.elephantIds.every(id =>   
        elephants.find(e => e.id === id && e.collected)  
      )  
    ).length,  
    totalSets: elephantSets.length  
  };  

  // Berechne Gesamtpunkte  
  const totalBasePoints = elephants  
    .filter(e => e.collected)  
    .reduce((sum, e) => sum + e.basePoints, 0);  
    
  const totalBonusPoints = elephants  
    .filter(e => e.collected)  
    .reduce((sum, e) => sum + e.bonusPoints, 0);  
    
  const completedSetIds = elephantSets  
    .filter(set => set.elephantIds.every(id =>   
      elephants.find(e => e.id === id && e.collected)  
    ))  
    .map(set => set.id);  
    
  const totalSetBonusPoints = elephantSets  
    .filter(set => completedSetIds.includes(set.id))  
    .reduce((sum, set) => sum + set.bonusPoints, 0);  
    
  const grandTotal = totalBasePoints + totalBonusPoints + totalSetBonusPoints;  

  return (  
    <div>  
      {/* Navigation Tabs für Elefantensammlung */}  
      <div className="flex mb-6 border-b border-blue-800">  
        <button   
          className={`px-4 py-2 flex items-center gap-2 ${activeSubTab === 'gallery' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
          onClick={() => setActiveSubTab('gallery')}  
        >  
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="3" x2="21" y1="15" y2="15"></line><line x1="9" x2="9" y1="3" y2="21"></line><line x1="15" x2="15" y1="3" y2="21"></line></svg>  
          Galerie  
        </button>  
        <button   
          className={`px-4 py-2 flex items-center gap-2 ${activeSubTab === 'sets' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
          onClick={() => setActiveSubTab('sets')}  
        >  
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"></path><path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"></path><path d="M12 3v6"></path></svg>  
          Sets  
        </button>  
        <button   
          className={`px-4 py-2 flex items-center gap-2 ${activeSubTab === 'stats' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
          onClick={() => setActiveSubTab('stats')}  
        >  
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>  
          Statistiken  
        </button>  
        <button   
          className={`px-4 py-2 flex items-center gap-2 ${activeSubTab === 'cards' ? 'bg-blue-800 text-white rounded-t-lg border-b-2 border-yellow-400' : 'text-blue-300 hover:text-white'}`}  
          onClick={() => setActiveSubTab('cards')}  
        >  
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>  
          Karten  
        </button>  
      </div>  
      
      {/* Content based on active subtab */}  
      {activeSubTab === 'gallery' && (  
        <ElephantGallery   
          filteredElephants={filteredElephants}  
          filterDifficulty={filterDifficulty}  
          setFilterDifficulty={setFilterDifficulty}  
          filterRarity={filterRarity}  
          setFilterRarity={setFilterRarity}  
          filterSetId={filterSetId}  
          setFilterSetId={setFilterSetId}  
          filterCollected={filterCollected}  
          setFilterCollected={setFilterCollected}  
          sortBy={sortBy}  
          setSortBy={setSortBy}  
          searchQuery={searchQuery}  
          setSearchQuery={setSearchQuery}  
          elephantSets={elephantSets}  
          setSelectedElephant={setSelectedElephant}  
          setShowElephantDetail={setShowElephantDetail}  
        />  
      )}  
      
      {activeSubTab === 'sets' && (  
        <ElephantSets   
          elephants={elephants}  
          elephantSets={elephantSets}  
          setSelectedElephant={setSelectedElephant}  
          setShowElephantDetail={setShowElephantDetail}  
        />  
      )}  
      
      {activeSubTab === 'stats' && (  
        <ElephantStats   
          stats={stats}  
          totalBasePoints={totalBasePoints}  
          totalBonusPoints={totalBonusPoints}  
          totalSetBonusPoints={totalSetBonusPoints}  
          grandTotal={grandTotal}  
          completedSetIds={completedSetIds}  
        />  
      )}  
      
      {activeSubTab === 'cards' && (  
        <CardAlbum   
          elephants={elephants}  
          stats={stats}  
        />  
      )}  
      
      {/* Elefanten-Detail-Modal */}  
      {showElephantDetail && selectedElephant && (  
        <ElephantDetail   
          elephant={selectedElephant}  
          elephantSets={elephantSets}  
          elephants={elephants}  
          setShowElephantDetail={setShowElephantDetail}  
        />  
      )}  
    </div>  
  );  
}
// ========== ELEFANTENSAMMLUNG UNTERKOMPONENTEN 1 ==========  

// Elefantensammlung - Galerie-Ansicht  
function ElephantGallery({   
  filteredElephants,   
  filterDifficulty, setFilterDifficulty,  
  filterRarity, setFilterRarity,  
  filterSetId, setFilterSetId,  
  filterCollected, setFilterCollected,  
  sortBy, setSortBy,  
  searchQuery, setSearchQuery,  
  elephantSets,  
  setSelectedElephant,  
  setShowElephantDetail  
}) {  
  return (  
    <>  
      {/* Filter und Suchfunktionen */}  
      <div className="bg-blue-900/50 p-4 rounded-lg mb-6 border border-blue-800">  
        <div className="flex flex-col md:flex-row gap-4">  
          <div className="flex-1">  
            <div className="relative">  
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="absolute top-2.5 left-3 h-4 w-4 text-blue-400"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>  
              <input  
                type="text"  
                placeholder="Suche nach Namen oder Nummer..."  
                className="w-full bg-blue-950 border border-blue-700 rounded-md py-2 pl-10 pr-4 text-white placeholder-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-600"  
                value={searchQuery}  
                onChange={(e) => setSearchQuery(e.target.value)}  
              />  
            </div>  
          </div>  
          
          <div className="flex flex-wrap gap-2">  
            <select  
              className="bg-blue-950 border border-blue-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"  
              value={filterDifficulty}  
              onChange={(e) => setFilterDifficulty(e.target.value)}  
            >  
              <option value="all">Alle Schwierigkeiten</option>  
              <option value="easy">Leicht</option>  
              <option value="medium">Mittel</option>  
              <option value="hard">Schwer</option>  
            </select>  
            
            <select  
              className="bg-blue-950 border border-blue-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"  
              value={filterRarity}  
              onChange={(e) => setFilterRarity(e.target.value)}  
            >  
              <option value="all">Alle Seltenheiten</option>  
              <option value="common">Gewöhnlich</option>  
              <option value="rare">Selten</option>  
              <option value="legendary">Legendär</option>  
            </select>  
            
            <select  
              className="bg-blue-950 border border-blue-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"  
              value={filterSetId}  
              onChange={(e) => setFilterSetId(e.target.value)}  
            >  
              <option value="all">Alle Sets</option>  
              {elephantSets.map(set => (  
                <option key={set.id} value={set.id}>{set.name}</option>  
              ))}  
            </select>  
            
            <select  
              className="bg-blue-950 border border-blue-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"  
              value={filterCollected}  
              onChange={(e) => setFilterCollected(e.target.value)}  
            >  
              <option value="all">Alle Elefanten</option>  
              <option value="collected">Gefunden</option>  
              <option value="uncollected">Nicht gefunden</option>  
            </select>  
            
            <select  
              className="bg-blue-950 border border-blue-700 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-600"  
              value={sortBy}  
              onChange={(e) => setSortBy(e.target.value)}  
            >  
              <option value="id">Sortieren nach: Nummer</option>  
              <option value="name">Sortieren nach: Name</option>  
              <option value="points">Sortieren nach: Punkte</option>  
              <option value="date">Sortieren nach: Funddatum</option>  
            </select>  
          </div>  
        </div>  
      </div>  
      
      {/* Elefanten-Galerie */}  
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">  
        {filteredElephants.map(elephant => (  
          <div   
            key={elephant.id}  
            className={`bg-blue-900/60 border ${  
              elephant.collected   
                ? elephant.rarity === 'legendary'   
                  ? 'border-yellow-400'   
                  : elephant.rarity === 'rare'   
                    ? 'border-cyan-400'   
                    : 'border-blue-700'  
                : 'border-blue-800 opacity-70'  
            } rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105`}  
            onClick={() => {  
              setSelectedElephant(elephant);  
              setShowElephantDetail(true);  
            }}  
          >  
            <div className="relative aspect-square">  
              <img   
                src={elephant.imageUrl}   
                alt={elephant.name}  
                className={`w-full h-full object-cover ${!elephant.collected && 'grayscale'}`}   
              />  
              
              {elephant.collected && elephant.rarity === 'legendary' && (  
                <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent" />  
              )}  
              
              {elephant.collected && elephant.rarity === 'rare' && (  
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent" />  
              )}  
              
              <div className="absolute top-2 left-2 bg-blue-900/80 text-white px-2 py-1 rounded-md text-xs font-bold">  
                #{elephant.id}  
              </div>  
              
              {elephant.collected && (  
                <div className="absolute top-2 right-2 bg-green-600/80 text-white p-1 rounded-full">  
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">  
                    <polyline points="20 6 9 17 4 12"></polyline>  
                  </svg>  
                </div>  
              )}  
              
              {!elephant.collected && (  
                <div className="absolute inset-0 flex items-center justify-center">  
                  <div className="bg-blue-900/80 text-white px-3 py-1 rounded-full text-xs">  
                    Noch nicht gefunden  
                  </div>  
                </div>  
              )}  
            </div>  
            
            <div className="p-3">  
              <h3 className="font-bold truncate">{elephant.name}</h3>  
              <div className="flex justify-between items-center mt-1">  
                <span className={`text-xs px-2 py-0.5 rounded-full ${  
                  elephant.difficulty === 'easy'   
                    ? 'bg-green-700/40 text-green-200'   
                    : elephant.difficulty === 'medium'   
                      ? 'bg-yellow-700/40 text-yellow-200'   
                      : 'bg-red-700/40 text-red-200'  
                }`}>  
                  {  
                    elephant.difficulty === 'easy' ? 'Leicht' :   
                    elephant.difficulty === 'medium' ? 'Mittel' : 'Schwer'  
                  }  
                </span>  
                
                <span className="text-sm font-bold">  
                  {elephant.basePoints + elephant.bonusPoints} Pkt.  
                </span>  
              </div>  
              
              <div className="flex items-center mt-2 text-xs text-blue-300">  
                <span className="mr-1">{elephantSets.find(set => set.id === elephant.setId)?.icon}</span>  
                <span className="truncate">{elephantSets.find(set => set.id === elephant.setId)?.name}</span>  
              </div>  
            </div>  
          </div>  
        ))}  
      </div>  
      
      {filteredElephants.length === 0 && (  
        <div className="bg-blue-900/30 border border-blue-800 rounded-lg p-8 text-center">  
          <div className="text-4xl mb-4">🔍</div>  
          <h3 className="text-lg font-bold mb-2">Keine Elefanten gefunden</h3>  
          <p className="text-blue-300">Versuche andere Filtereinstellungen oder eine andere Suchanfrage.</p>  
        </div>  
      )}  
    </>  
  );  
}  

// Elefantensammlung - Sets-Übersicht  
function ElephantSets({ elephants, elephantSets, setSelectedElephant, setShowElephantDetail }) {  
  return (  
    <div className="space-y-6">  
      {elephantSets.map(set => {  
        const setElephants = elephants.filter(e => set.elephantIds.includes(e.id));  
        const collectedCount = setElephants.filter(e => e.collected).length;  
        const isComplete = collectedCount === set.elephantIds.length;  
        
        return (  
          <div   
            key={set.id}  
            className={`bg-blue-900/40 rounded-lg border ${  
              isComplete ? 'border-yellow-400' : 'border-blue-800'  
            } overflow-hidden`}  
          >  
            <div className={`p-4 ${isComplete ? 'bg-gradient-to-r from-blue-800 to-indigo-800' : ''}`}>  
              <div className="flex items-center justify-between">  
                <div className="flex items-center gap-3">  
                  <div className="w-12 h-12 flex items-center justify-center text-2xl bg-blue-950 rounded-full">  
                    {set.icon}  
                  </div>  
                  <div>  
                    <h3 className="font-bold text-lg">{set.name}</h3>  
                    <p className="text-sm text-blue-300">{set.description}</p>  
                  </div>  
                </div>  
                
                <div className="text-right">  
                  <div className="text-sm">  
                    Fortschritt: <span className="font-bold">{collectedCount}/{set.elephantIds.length}</span>  
                  </div>  
                  {isComplete && (  
                    <div className="mt-1 text-sm text-yellow-300 font-bold">  
                      +{set.bonusPoints} Bonuspunkte  
                    </div>  
                  )}  
                </div>  
              </div>  
              
              <div className="mt-3">  
                <div className="w-full h-2 bg-blue-950 rounded-full overflow-hidden">  
                  <div   
                    className={`h-full rounded-full ${  
                      isComplete   
                        ? 'bg-gradient-to-r from-yellow-500 to-yellow-300'   
                        : 'bg-gradient-to-r from-blue-600 to-indigo-500'  
                    }`}  
                    style={{ width: `${(collectedCount / set.elephantIds.length) * 100}%` }}  
                  />  
                </div>  
              </div>  
            </div
// ========== ELEFANTENSAMMLUNG UNTERKOMPONENTEN 2 ==========  

// Fortsetzung von ElephantSets (der letzte Teil wurde abgeschnitten)  
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-blue-950">  
              {setElephants.map(elephant => (  
                <div   
                  key={elephant.id}  
                  className={`p-3 ${elephant.collected ? 'bg-blue-800/50' : 'bg-blue-900/30'} cursor-pointer hover:bg-blue-800/80`}  
                  onClick={() => {  
                    setSelectedElephant(elephant);  
                    setShowElephantDetail(true);  
                  }}  
                >  
                  <div className="flex items-center gap-2">  
                    <div className={`w-10 h-10 flex-shrink-0 rounded overflow-hidden border ${  
                      elephant.collected   
                        ? elephant.rarity === 'legendary'   
                          ? 'border-yellow-400'   
                          : elephant.rarity === 'rare'   
                            ? 'border-cyan-400'   
                            : 'border-blue-700'  
                        : 'border-blue-900 opacity-60'  
                    }`}>  
                      <img   
                        src={elephant.imageUrl}   
                        alt={elephant.name}  
                        className={`w-full h-full object-cover ${!elephant.collected && 'grayscale'}`}   
                      />  
                    </div>  
                    <div>  
                      <div className="text-xs font-bold">#{elephant.id} {elephant.name}</div>  
                      <div className="flex items-center gap-1 text-xs mt-1">  
                        <span className={`px-1.5 rounded ${  
                          elephant.difficulty === 'easy'   
                            ? 'bg-green-700/40 text-green-200'   
                            : elephant.difficulty === 'medium'   
                              ? 'bg-yellow-700/40 text-yellow-200'   
                              : 'bg-red-700/40 text-red-200'  
                        }`}>  
                          {  
                            elephant.difficulty === 'easy' ? 'L' :   
                            elephant.difficulty === 'medium' ? 'M' : 'S'  
                          }  
                        </span>  
                        <span className={`  
                          ${elephant.rarity === 'legendary' ? 'text-yellow-400' :   
                            elephant.rarity === 'rare' ? 'text-cyan-400' : 'text-blue-300'}  
                        `}>  
                          {  
                            elephant.rarity === 'common' ? 'Gewöhnlich' :   
                            elephant.rarity === 'rare' ? 'Selten' : 'Legendär'  
                          }  
                        </span>  
                      </div>  
                    </div>  
                  </div>  
                </div>  
              ))}  
            </div>  
          </div>  
        );  
      })}  
    </div>  
  );  
}  

// Elefantensammlung - Statistiken  
function ElephantStats({   
  stats,   
  totalBasePoints,   
  totalBonusPoints,   
  totalSetBonusPoints,   
  grandTotal,  
  completedSetIds  
}) {  
  return (  
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">  
      <div className="md:col-span-2">  
        <div className="bg-blue-900/40 rounded-lg border border-blue-800 overflow-hidden mb-6">  
          <div className="p-4 border-b border-blue-800 flex justify-between items-center">  
            <h3 className="font-bold">Deine Sammlung im Überblick</h3>  
            <div className="text-sm text-blue-300">  
              Gesamt: <span className="font-bold text-white">{stats.collected}/{stats.total}</span>  
            </div>  
          </div>  
          
          <div className="p-6">  
            <div className="w-full h-6 bg-blue-950 rounded-full overflow-hidden mb-6">  
              <div   
                className="h-full bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 rounded-full"  
                style={{ width: `${(stats.collected / stats.total) * 100}%` }}  
              />  
            </div>  
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">  
              <div className="bg-blue-950/70 p-4 rounded-lg">  
                <h4 className="text-sm text-blue-300 mb-2">Nach Schwierigkeit</h4>  
                <div className="space-y-2">  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Leicht</span>  
                      <span className="font-bold">{stats.byDifficulty.easy}/25</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-green-500 rounded-full"  
                        style={{ width: `${(stats.byDifficulty.easy / 25) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Mittel</span>  
                      <span className="font-bold">{stats.byDifficulty.medium}/50</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-yellow-500 rounded-full"  
                        style={{ width: `${(stats.byDifficulty.medium / 50) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Schwer</span>  
                      <span className="font-bold">{stats.byDifficulty.hard}/25</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-red-500 rounded-full"  
                        style={{ width: `${(stats.byDifficulty.hard / 25) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                </div>  
              </div>  
              
              <div className="bg-blue-950/70 p-4 rounded-lg">  
                <h4 className="text-sm text-blue-300 mb-2">Nach Seltenheit</h4>  
                <div className="space-y-2">  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Gewöhnlich</span>  
                      <span className="font-bold">{stats.byRarity.common}/70</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-blue-500 rounded-full"  
                        style={{ width: `${(stats.byRarity.common / 70) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Selten</span>  
                      <span className="font-bold">{stats.byRarity.rare}/20</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-cyan-500 rounded-full"  
                        style={{ width: `${(stats.byRarity.rare / 20) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                  
                  <div>  
                    <div className="flex justify-between text-xs mb-1">  
                      <span>Legendär</span>  
                      <span className="font-bold">{stats.byRarity.legendary}/10</span>  
                    </div>  
                    <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                      <div   
                        className="h-full bg-yellow-500 rounded-full"  
                        style={{ width: `${(stats.byRarity.legendary / 10) * 100}%` }}  
                      />  
                    </div>  
                  </div>  
                </div>  
              </div>  
              
              <div className="bg-blue-950/70 p-4 rounded-lg">  
                <h4 className="text-sm text-blue-300 mb-2">Set-Fortschritt</h4>  
                <div className="mb-3">  
                  <div className="flex justify-between text-xs mb-1">  
                    <span>Vollständige Sets</span>  
                    <span className="font-bold">{stats.completedSets}/{stats.totalSets}</span>  
                  </div>  
                  <div className="w-full h-2 bg-blue-900 rounded-full overflow-hidden">  
                    <div   
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"  
                      style={{ width: `${(stats.completedSets / stats.totalSets) * 100}%` }}  
                    />  
                  </div>  
                </div>  
                
                <div className="text-center mt-4">  
                  <div className="text-2xl font-bold mb-1">  
                    {completedSetIds.length > 0 ? completedSetIds.length * 50 : 0}  
                  </div>  
                  <div className="text-xs text-blue-300">Bonus-Punkte durch Sets</div>  
                </div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
      
      {/* Punkteübersicht */}  
      <div>  
        <div className="bg-gradient-to-r from-blue-800 to-indigo-800 rounded-lg border border-blue-700 overflow-hidden mb-6">  
          <div className="p-4 border-b border-blue-700">  
            <h3 className="font-bold">Punkte-Übersicht</h3>  
          </div>  
          
          <div className="p-6 text-center">  
            <div className="text-3xl font-bold mb-1 text-yellow-400">{grandTotal}</div>  
            <div className="text-sm text-blue-300">Gesamtpunkte</div>  
            
            <div className="grid grid-cols-3 gap-4 mt-6">  
              <div>  
                <div className="text-xl font-bold">{totalBasePoints}</div>  
                <div className="text-xs text-blue-300">Basispunkte</div>  
              </div>  
              <div>  
                <div className="text-xl font-bold text-cyan-400">{totalBonusPoints}</div>  
                <div className="text-xs text-blue-300">Seltenheitsbonus</div>  
              </div>  
              <div>  
                <div className="text-xl font-bold text-purple-400">{totalSetBonusPoints}</div>  
                <div className="text-xs text-blue-300">Set-Bonus</div>  
              </div>  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  

// Elefantensammlung - Kartenalbum   
function CardAlbum({ elephants, stats }) {  
  return (  
    <div>  
      <div className="bg-blue-900/40 rounded-lg border border-blue-800 overflow-hidden mb-6">  
        <div className="p-4 border-b border-blue-800 flex justify-between items-center">  
          <h3 className="font-bold">Dein Sammelkarten-Album</h3>  
          <div className="text-sm text-blue-300">  
            Gesammelt: <span className="font-bold text-white">{stats.collected}/{stats.total}</span>  
          </div>  
        </div>  
        
        <div className="p-6">  
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">  
            {elephants.filter(e => e.collected && e.cardUnlocked).map(elephant => (  
              <div   
                key={elephant.id}  
                className={`relative rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${  
                  elephant.rarity === 'legendary' ? 'ring-2 ring-yellow-400 shadow-lg shadow-yellow-400/20' :   
                  elephant.rarity === 'rare' ? 'ring-2 ring-cyan-400 shadow-md shadow-cyan-400/20' : ''  
                }`}  
              >  
                <div className="aspect-[3/4] bg-gradient-to-b from-blue-800 to-indigo-900 relative">  
                  <img   
                    src={elephant.imageUrl}   
                    alt={elephant.name}  
                    className="w-full h-full object-cover"   
                  />  
                  
                  {elephant.rarity === 'legendary' && (  
                    <div className="absolute inset-0 bg-gradient-to-t from-yellow-500/30 to-transparent pointer-events-none" />  
                  )}  
                  
                  {elephant.rarity === 'rare' && (  
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/30 to-transparent pointer-events-none" />  
                  )}  
                  
                  <div className="absolute top-2 left-2 bg-blue-900/80 text-white px-2 py-1 rounded-md text-xs font-bold">  
                    #{elephant.id}  
                  </div>  
                  
                  <div className={`absolute bottom-0 left-0 right-0 p-3 ${  
                    elephant.rarity === 'legendary' ? 'bg-gradient-to-t from-blue-900/95 via-blue-900/80 to-transparent' :  
                    'bg-gradient-to-t from-blue-900/90 to-transparent'  
                  }`}>  
                    <h3 className="font-bold truncate">{elephant.name}</h3>  
                    <div className="flex justify-between items-center mt-1">  
                      <span className={`text-xs px-2 py-0.5 rounded-full ${  
                        elephant.rarity === 'legendary' ? 'bg-yellow-700/60 text-yellow-200' :   
                        elephant.rarity === 'rare' ? 'bg-cyan-700/60 text-cyan-200' :   
                        'bg-blue-700/60 text-blue-200'  
                      }`}>  
                        {  
                          elephant.rarity === 'common' ? 'Gewöhnlich' :   
                          elephant.rarity === 'rare' ? 'Selten' : 'Legendär'  
                        }  
                      </span>  
                    </div>  
                  </div>  
                </div>  
              </div>  
            ))}  
            
            {/* Platzhalter für noch nicht freigeschaltete Karten */}  
            {Array.from({ length: stats.total - elephants.filter(e => e.collected && e.cardUnlocked).length }).map((_, index) => (  
              <div   
                key={`placeholder-${index}`}  
                className="aspect-[3/4] bg-blue-950/60 border border-blue-800 rounded-lg flex items-center justify-center"  
              >  
                <div className="text-center p-4">  
                  <div className="text-3xl mb-2 opacity-30">❓</div>  
                  <p className="text-sm text-blue-400">Noch nicht gesammelt</p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}  

// Elefantensammlung - Detail-Ansicht  
function ElephantDetail({ elephant, elephantSets, elephants, setShowElephantDetail }) {  
  if (!elephant) return null;  
  
  const set = elephantSets.find(set => set.id === elephant.setId);  
  const totalPoints = elephant.basePoints + elephant.bonusPoints;  
  
  return (  
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-blue-950/80 p-4">  
      <div className="bg-gradient-to-r from-blue-900 to-indigo-900 rounded-lg border border-blue-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">  
        <div className="p-4 border-b border-blue-700 flex justify-between items-center">  
          <h3 className="text-lg font-bold flex items-center gap-2">  
            <span className="text-yellow-400">#{elephant.id}</span> {elephant.name}  
          </h3>  
          <button   
            onClick={() => setShowElephantDetail(false)}  
            className="text-blue-300 hover:text-white"  
          >  
            ✕  
          </button>  
        </div>  
        
        <div className="p-6">  
          <div className="flex flex-col md:flex-row gap-6">  
            <div className="md:w-1/3">  
              <div className={`aspect-square rounded-lg overflow-hidden border-4 ${  
                elephant.collected   
                  ? elephant.rarity === 'legendary'   
                    ? 'border-yellow-400 shadow-lg shadow-yellow-400/20'   
                    : elephant.rarity === 'rare'   
                      ? 'border-cyan-400 shadow-lg shadow-cyan-400/20'   
                      : 'border-white'  
                  : 'border-blue-700 opacity-50'  
              }`}>  
                <img   
                  src={elephant.imageUrl}   
                  alt={elephant.name}   
                  className={`w-full h-full object-cover ${!elephant.collected && 'grayscale'}`}  
                />  
              </div>  
              
              {elephant.collected && (  
                <div className="mt-4 text-center">  
                  <span className="inline-block px-3 py-1 bg-green-600 text-white text-sm rounded-full">  
                    Gefunden am {elephant.dateCollected}  
                  </span>  
                </div>  
              )}  
            </div>  
            
            <div className="md:w-2/3">  
              <div className="grid grid-cols-2 gap-4 mb-4">  
                <div className="bg-blue-950 rounded p-3">  
                  <p className="text-xs text-blue-300">Schwierigkeit</p>  
                  <p className="font-bold">  
                    {  
                      elephant.difficulty === 'easy' ? 'Leicht' :   
                      elephant.difficulty === 'medium' ? 'Mittel' : 'Schwer'  
                    }  
                  </p>  
                </div>  
                
                <div className="bg-blue-950 rounded p-3">  
                  <p className="text-xs text-blue-300">Seltenheit</p>  
                  <p className={`font-bold ${  
                    elephant.rarity === 'legendary' ? 'text-yellow-400' :   
                    elephant.rarity === 'rare' ? 'text-cyan-400' : 'text-white'  
                  }`}>  
                    {  
                      elephant.rarity === 'common' ? 'Gewöhnlich' :   
                      elephant.rarity === 'rare' ? 'Selten' : 'Legendär'  
                    }  
                  </p>  
                </div>  
                
                <div className="bg-blue-950 rounded p-3">  
                  <p className="text-xs text-blue-300">Basispunkte</p>  
                  <p className="font-bold">{elephant.basePoints} Punkte</p>  
                </div>  
                
                <div className="bg-blue-950 rounded p-3">  
                  <p className="text-xs text-blue-300">Bonus</p>  
                  <p className="font-bold">+{elephant.bonusPoints} Punkte</p>  
                </div>  
              </div>  
              
              <div className="bg-blue-950 rounded p-3 mb-4">  
                <p className="text-xs text-blue-300">Set</p>  
                <div className="flex items-center gap-2">  
                  <span className="text-xl">{set?.icon}</span>  
                  <p className="font-bold">{set?.name}</p>  
                </div>  
                <p className="text-sm text-blue-300 mt-1">{set?.description}</p>  
              </div>  
              
              <div className="bg-blue-950 rounded p-3">  
                <p className="text-xs text-blue-300 mb-2">Sammelfortschritt für dieses Set</p>  
                <div className="flex justify-between text-xs mb-1">  
                  <span>Fortschritt</span>  
                  <span>  
                    {set ?   
                      elephants.filter(e => set.elephantIds.includes(e.id) && e.collected).length   
                      : 0}  
                    /{set?.elephantIds.length || 0}  
                  </span>  
                </div>  
                <div className="w-full h-2 bg-blue-800 rounded-full overflow-hidden">  
                  <div   
                    className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"  
                    style={{   
                      width: `${set ?   
                        (elephants.filter(e => set.elephantIds.includes(e.id) && e.collected).length / set.elephantIds.length) * 100   
                        : 0}%`   
                    }}  
                  />  
                </div>  
              </div>  
              
              {elephant.collected && elephant.cardUnlocked && (  
                <div className="mt-4">  
                  <button className="w-full py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg font-bold hover:from-purple-500 hover:to-blue-500 transition-colors flex items-center justify-center gap-2">  
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>  
                    Sammelkarte anzeigen  
                  </button>  
                </div>  
              )}  
            </div>  
          </div>  
        </div>  
      </div>  
    </div>  
  );  
}
// ========== HAUPTANWENDUNG ==========  

// QuestTracker-Hauptkomponente  
function QuestTracker() {  
  // State für die Punkte und Belohnungen  
  const [totalPoints, setTotalPoints] = React.useState(0);  
  const [availablePoints, setAvailablePoints] = React.useState(0);  
  const [showSettings, setShowSettings] = React.useState(false);  
  const [activeTab, setActiveTab] = React.useState("progress");  
  const [showRewardCategory, setShowRewardCategory] = React.useState(null);  
  
  // Lokaler State für Meilensteine  
  const [userMilestones, setUserMilestones] = React.useState(milestones);  
  
  // State für Elefanten und Sets  
  const [userElephants, setUserElephants] = React.useState(elephants);  
  const [userElephantSets, setUserElephantSets] = React.useState(elephantSets);  
  
  // Punktestand aktualisieren und Meilensteine überprüfen  
  React.useEffect(() => {  
    const updatedMilestones = userMilestones.map(milestone => ({  
      ...milestone,  
      reached: totalPoints >= milestone.points  
    }));  
    setUserMilestones(updatedMilestones);  
    setAvailablePoints(totalPoints);  
  }, [totalPoints]);  
  
  // Punkte hinzufügen (für Demo)  
  const addPoints = (amount) => {  
    setTotalPoints(prev => prev + amount);  
  };  
  
  // Reset (für Demo)  
  const resetPoints = () => {  
    setTotalPoints(0);  
    setAvailablePoints(0);  
  };  
  
  return (  
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 via-blue-900 to-indigo-950 text-white font-sans">  
      {/* Header mit TARDIS-Design */}  
      <Header showSettings={showSettings} setShowSettings={setShowSettings} />  
      
      {/* Settings Panel (für Demo) */}  
      {showSettings && <SettingsPanel addPoints={addPoints} resetPoints={resetPoints} />}  
      
      {/* Main Content */}  
      <main className="container mx-auto px-4 py-6">  
        {/* Character Sheet / Points */}  
        <CharacterSheet totalPoints={totalPoints} availablePoints={availablePoints} />  
        
        {/* Navigation Tabs */}  
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />  
        
        {/* Content based on active tab */}  
        {activeTab === 'progress' && (  
          <ProgressTab   
            totalPoints={totalPoints}   
            userMilestones={userMilestones}  
          />  
        )}  
        
        {activeTab === 'rewards' && (  
          <RewardsTab   
            availablePoints={availablePoints}   
            showRewardCategory={showRewardCategory}  
            setShowRewardCategory={setShowRewardCategory}  
            rewardCategories={rewardCategories}  
          />  
        )}  
        
        {activeTab === 'elephants' && (  
          <ElephantCollection   
            elephants={userElephants}  
            elephantSets={userElephantSets}  
            totalPoints={totalPoints}  
          />  
        )}  
      </main>  
      
      {/* Footer */}  
      <footer className="bg-blue-950 border-t border-blue-900 p-4 text-center text-sm text-blue-400">  
        <p>Deine persönliche Schatzsuche • Version 1.0</p>  
        <p className="mt-1 text-xs">Allons-y! Geronimo!</p>  
      </footer>  
    </div>  
  );  
}  

// Anwendung rendern  
ReactDOM.render(<QuestTracker />, document.getElementById('root'));
