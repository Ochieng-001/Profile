import GlassCard from "./GlassCard";

export default function WorldMap() {
  return (
    <GlassCard className="p-0 relative overflow-hidden h-full min-h-[300px]">
      <div className="absolute inset-0 flex items-center justify-center">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 1000 500" 
          preserveAspectRatio="xMidYMid meet"
          className="text-blue-500/30 stroke-current"
        >
          {/* World Map Outline - Simplified */}
          <g stroke="currentColor" strokeWidth="1" fill="none">
            {/* North America */}
            <path d="M148,120 C180,100 220,80 250,90 C280,100 290,120 310,125 C330,130 350,120 370,115 C390,110 400,120 410,105 C420,90 425,70 440,65 C455,60 465,50 470,35 C475,20 200,35 190,40 C180,45 152,115 148,120 Z" />
            <path d="M148,120 C140,135 135,160 125,175 C115,190 100,210 90,230 C80,250 75,280 85,295 C95,310 120,320 130,335 C140,350 150,370 160,390 C170,410 185,425 195,430 C205,435 215,425 225,415 C235,405 235,390 240,375 C245,360 247,355 250,335 C253,315 254,295 255,275 C256,255 258,235 260,220 C270,210 280,200 290,195 C300,190 310,185 320,180 C330,175 340,170 345,160 C350,150 345,135 340,125 C335,115 325,110 315,110 C305,110 290,115 275,115 C260,115 240,110 225,105 C210,100 175,110 148,120 Z" />
            
            {/* South America */}
            <path d="M260,330 C270,350 265,375 260,395 C255,415 250,435 245,455 C240,475 235,495 230,510 C225,525 220,535 215,545 C210,555 205,565 215,565 C225,565 240,560 255,555 C270,550 285,545 300,540 C315,535 325,530 335,515 C345,500 350,480 355,455 C360,430 365,410 365,385 C365,360 360,340 355,315 C350,290 340,270 330,255 C320,240 310,235 295,230 C280,225 270,230 260,235 C250,240 250,310 260,330 Z" />
            
            {/* Europe */}
            <path d="M490,100 C495,95 500,90 507,87 C514,84 520,82 530,80 C540,78 550,76 560,78 C570,80 580,85 585,95 C590,105 590,120 585,130 C580,140 570,145 560,150 C550,155 540,160 525,162 C510,164 490,165 475,160 C460,155 450,145 445,135 C440,125 440,115 445,110 C450,105 485,105 490,100 Z" />
            <path d="M580,120 C590,115 600,112 610,110 C620,108 630,107 640,112 C650,117 655,130 660,142 C665,154 670,165 665,175 C660,185 645,190 630,192 C615,194 600,193 585,190 C570,187 558,181 550,173 C542,165 538,155 540,145 C542,135 550,128 560,126 C570,124 570,125 580,120 Z" />
            
            {/* Africa */}
            <path d="M520,200 C530,195 545,193 560,190 C575,187 590,185 605,190 C620,195 630,210 640,225 C650,240 655,255 660,275 C665,295 670,315 670,335 C670,355 665,375 655,390 C645,405 630,415 615,420 C600,425 585,425 570,420 C555,415 540,405 525,390 C510,375 500,355 490,335 C480,315 475,295 470,275 C465,255 465,235 470,220 C475,205 510,205 520,200 Z" />
            
            {/* Asia */}
            <path d="M650,100 C660,95 675,92 690,90 C705,88 720,87 735,90 C750,93 765,100 775,110 C785,120 790,135 795,150 C800,165 802,180 805,195 C808,210 810,225 805,240 C800,255 790,270 775,280 C760,290 740,295 720,295 C700,295 680,290 665,280 C650,270 640,255 635,240 C630,225 630,210 635,195 C640,180 650,165 655,150 C660,135 640,105 650,100 Z" />
            <path d="M800,170 C810,165 825,162 840,160 C855,158 870,157 885,160 C900,163 915,170 925,180 C935,190 940,205 945,220 C950,235 952,250 955,265 C958,280 960,295 955,310 C950,325 940,340 925,350 C910,360 890,365 870,365 C850,365 830,360 815,350 C800,340 790,325 785,310 C780,295 780,280 785,265 C790,250 800,235 805,220 C810,205 790,175 800,170 Z" />
            
            {/* Australia */}
            <path d="M875,330 C885,325 900,322 915,320 C930,318 945,317 960,320 C975,323 990,330 1000,340 C950,350 900,365 880,365 C860,365 840,360 825,350 C810,340 800,325 795,310 C790,295 790,280 795,265 C800,250 810,235 815,220 C820,235 835,250 850,265 C865,280 875,295 880,310 C885,325 865,335 875,330 Z" />

            {/* Connection Lines - Global Presence */}
            <path d="M250,90 C350,120 450,150 550,120" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M550,120 C650,100 750,80 850,180" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M250,90 C350,150 450,210 560,190" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M260,330 C350,300 440,270 520,200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M520,200 C620,230 720,260 800,170" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M800,170 C820,220 840,270 875,330" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
            <path d="M560,190 C650,240 740,290 875,330" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
          </g>

          {/* Primary Location */}
          <circle cx="560" cy="190" r="6" fill="#0099ff" className="animate-pulse" />
          <text x="575" y="190" fill="#0099ff" fontSize="10">Nairobi</text>
          
          {/* Secondary Locations */}
          <circle cx="250" cy="90" r="4" fill="#0099ff60" />
          <text x="210" y="85" fill="#0099ff90" fontSize="8">New York</text>
          
          <circle cx="148" cy="120" r="4" fill="#0099ff60" />
          <text x="110" y="120" fill="#0099ff90" fontSize="8">San Francisco</text>
          
          <circle cx="550" cy="120" r="4" fill="#0099ff60" />
          <text x="530" y="110" fill="#0099ff90" fontSize="8">London</text>
          
          <circle cx="800" cy="170" r="4" fill="#0099ff60" />
          <text x="810" y="170" fill="#0099ff90" fontSize="8">Singapore</text>
          
          <circle cx="875" cy="330" r="4" fill="#0099ff60" />
          <text x="885" y="330" fill="#0099ff90" fontSize="8">Sydney</text>
        </svg>
      </div>
      
      {/* Map Title */}
      <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/50 to-transparent">
        <h3 className="text-xl font-semibold text-center">Global Presence</h3>
        <p className="text-sm text-gray-400 text-center">Connecting blockchain technology across continents</p>
      </div>
      
      {/* Bottom Legend */}
      <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent text-xs text-gray-300 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <span className="inline-block w-3 h-3 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            <span>Primary Location</span>
          </div>
          <div className="flex items-center">
            <span className="inline-block w-2 h-2 rounded-full bg-blue-500/60 mr-2"></span>
            <span>Partners</span>
          </div>
        </div>
        <div className="text-right">
          <span>5 Continents · 18 Countries</span>
        </div>
      </div>
    </GlassCard>
  );
}