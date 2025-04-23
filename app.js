// App.js (Aktualisierung)  
import React, { useState, useEffect } from "react";  
import {   
  Book, Settings, Award, RotateCcw, ChevronDown, ChevronUp,   
  Sparkles, Gift, Home, Grid, Image, Package, BarChart2,   
  Search, Filter, Bookmark, Camera  
} from "lucide-react";  

// Importiere Komponenten  
import Header from "./components/Header";  
import SettingsPanel from "./components/SettingsPanel";  
import CharacterSheet from "./components/CharacterSheet";  
import NavigationTabs from "./components/NavigationTabs";  
import ProgressTab from "./components/ProgressTab";  
import RewardsTab from "./components/RewardsTab";  
import ElephantCollection from "./components/ElephantCollection/ElephantCollection";  

// Importiere Daten  
import { milestones } from "./data/milestones";  
import { elephants } from "./data/elephants";  
import { elephantSets } from "./data/elephantSets";  
import { rewardCategories } from "./data/rewardCategories";  

// Hauptkomponente  
function QuestTracker() {  
  // State für die Punkte und Belohnungen  
  const [totalPoints, setTotalPoints] = useState(0);  
  const [availablePoints, setAvailablePoints] = useState(0);  
  const [showSettings, setShowSettings] = useState(false);  
  const [activeTab, setActiveTab] = useState("progress");  
  const [showRewardCategory, setShowRewardCategory] = useState(null);  
  
  // Lokaler State für Meilensteine  
  const [userMilestones, setUserMilestones] = useState(milestones);  
  
  // State für Elefanten und Sets  
  const [userElephants, setUserElephants] = useState(elephants);  
  const [userElephantSets, setUserElephantSets] = useState(elephantSets);  
  
  // Punktestand aktualisieren und Meilensteine überprüfen  
  useEffect(() => {  
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

ReactDOM.render(<QuestTracker />, document.getElementById('root'));
