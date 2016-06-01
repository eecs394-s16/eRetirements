var categoryNames = {
	"location": "Location & Weather",
	"community": "Community & Demographics",
	"activities": "Activities & Work Potential",
	"health": "Health Care",
	"costs": "Cost of Living"
}

var category_num_completed = {
	"location":0,
	"activities":0,
	"community":0,
	"costs":0,
	"health":0
};

var ratings = {
	"location":-1,
	"community":-1,
	"activities":-1,
	"health":-1,
	"costs":-1
};

var categories = {
	"location": [
		{
			"name": "region",
			"question": "I'd prefer to live in the following regions (select all that apply)",
			"answers": ["West", "Midwest", "South", "Northeast"],
			"values" : ["west", "midwest", "south", "northeast"],
			"results" : [false,false,false,false]
		},
		{
			"name": "weatherType",
			"question": "My perfect weather...",
			"answers": ["is warm year-round, with as little rain as possible","is warm year-round, but I don't mind some showers","includes all 4 seasons, with maybe SOME snow","definitely has some snow"],
			"values": ["warm", "warm-showers", "all-seasons", "some-snow"],
			"results": [false,false,false,false]
		},
		{
			"name": "vacationDay",
			"question": "Close your eyes and picture your ideal day. You are...",
			"answers": ["spending some time on the beach","hitting the slopes","going for a hike in the woods","shopping/relaxing at home with a book"],
			"values": ["beach", "mountain", "forest", "home"],
			"results": [false,false,false,false]
		},
		{
			"name": "communitySize",
			"question": "My ideal location is...",
			"answers": ["A Quaint Town (Think Little House on the Prairie)","A Big Town (Think Myrtle Beach)","A Small City (Think Sarasota)","A Big City (Think Dallas)"],
			"values": ["quaint-town", "big-town", "small-city", "big-city"],
			"results":[false,false,false,false]
		}
	],
	"activities": [
		{
			"name": "golf",
			"question": "Golf...",
			"answers": ["is the love of my life (besides my spouse of course)","is fun every now and then","doesn't interest me"],
			"values": ["important", "occasionally", "no", ""],
			"results":[false,false,false,false]
		},
		{
			"name": "museumsAndHistoricalSites",
			"question": "When it comes to historical sites and museums,",
			"answers": ["I love them both","the history is great, but I can do without the museums","an occasional day at the museum is always enriching","I haven't been to one since my 5th grade field trip"],
			"values": ["both", "history", "museums", "none"],
			"results":[false,false,false,false]
		},
		{
			"name": "food",
			"question": "When it comes to food, I like to,",
			"answers": ["Try as many restaurants as possible, I'm a bit of a foodie","Find a few favorite restaurants and stick to them","Forget restaurants-I'm a takeout/fast food person","I don't go out to eat often"],
			"values": ["foodie", "routine", "fast-food", "home-cook"],
			"results":[false,false,false,false]
		},
		{
			"name": "work",
			"question": "In my new location I will,",
			"answers": ["Work full time - have to pay the bills!","Work part time - got to stay busy","Forget work - I'm ready to relax"],
			"values": ["full-time", "part-time", "none", ""],
			"results":[false,false,false,false]
		}
	],
	"community": [
		{
			"name": "getAround",
			"question": "I prefer to get to work or around the community by..",
			"answers": ["Walking","Car","Public Transit","Taxi/Bike/Motorcycle/Other"],
			"values": ["walking", "car", "public-transit", "other"],
			"results": [false,false,false,false]
		},
		{
			"name": "collegeTowns",
			"question": "The culture of a college town...",
			"answers": ["sounds appealing","doesn't really interest me","I don't care either way"],
			"values": ["yes", "no", "any", ""],
			"results":[false,false,false,false]
		},
		{
			"name": "idealCommunity",
			"question": "My ideal community (select all that apply)..",
			"answers": ["Has a lot of young people","Is very volunteer focused","Is higher income","Is physically active"],
			"values": ["young", "volunteering", "wealthy", "active"],
			"results": [false,false,false,false]
		},
		{
			"name": "averageAge",
			"question": "I prefer to be with people in the following age range..",
			"answers": ["Early retirees","Retirement aged","Late retirees","Mix of families and retirees"],
			"values": ["55-64", "65-74", "75+", "any"],
			"results":[false,false,false,false]
		},
		{
			"name": "travel",
			"question": "I expect to travel...",
			"answers": ["all over the world","a lot, but mostly domestic","a little, but expect a lot of visitors","none - why would I leave my perfect new home?"],
			"values": ["world", "domestic", "visitors", "no"],
			"results":[false,false,false,false]
		}
	],
	"costs": [
		{
			"name": "buyingHome",
			"question": "I plan on buying a home...",
			"answers": ["cheap - my money is best spent elsewhere","average priced","I don't mind splurging - it's my retirement dream home for crying out loud!","I plan on renting, so this doesn't apply to me."],
			"values": ["cheap", "average", "expensive", "rent"],
			"results":[false,false,false,false]
		},
		{
			"name": "taxes",
			"question": "When it comes to taxes...",
			"answers": ["I would sacrifice quality of life for the lowest taxes possible","Taxes are inevitable, but I would like to keep them low","I can deal with an average amount of taxes","Completely worth it for the right location"],
			"values": ["lowest", "below-average", "average", "any"],
			"results":[false,false,false,false]
		},
		{
			"name": "livingCosts",
			"question": "My living costs during retirement...",
			"answers": ["are not a concern","are somewhat important","are something I need to keep a close eye on","are a top priority - I'm on a tight budget"],
			"values": ["any", "important", "very-important", "budget"],
			"results":[false,false,false,false]
		}
	],
	"health": [
		{
			"name": "clinicalQuality",
			"question": "The quality of the clinical care...",
			"answers": ["needs to be the best","should be better than the average","average quality of care is just fine","doesn't matter to me, I don't go to the doctor often"],
			"values": ["best", "above-average", "average", "any"],
			"results":[false,false,false,false]
		},
		{
			"name": "assistedLivingCosts",
			"question": "The cost of assisted living in the area should be...",
			"answers": ["a good value","about average","irrelevant - I'll pay whatever it takes for the best","haven't thought about that just yet"],
			"values": ["low", "above-average", "top", "undecided"],
			"results":[false,false,false,false]
		},
		{
			"name": "nursingHomes",
			"question": "The local nursing homes...",
			"answers": ["Need to be the best in the business","Need to be strong, but not the best","Should be a good value","Nursing Home? Not even on my radar yet"],
			"values": ["best", "strong", "average", "none"],
			"results":[false,false,false,false]
		}
	]
}

var dataForApi = {
	"region": ["south", "north", "west", "east"],
	"communitySize": "",
	"vacationDay": "",
	"weatherType": "",
	"idealCommunity": [""],
	"livingCosts": "",
	"golf": "",
	"averageAge": "",
	"getAround": "",
	"clinicalQuality": "",
	"food": "",
	"assistedLivingCosts": "",
	"collegeTowns": "",
	"work": "",
	"museumsAndHistoricalSites": "",
	"nursingHomes": "",
	"buyingHome": "",
	"travel": "",
	"taxes": "",
	"weather": -1,
	"location": -1,
	"activities": -1,
	"workPotential": -1,
	"community": -1,
	"demographics": -1,
	"healthcare": -1,
	"costs": -1,
	"restrictRegion": false
}
