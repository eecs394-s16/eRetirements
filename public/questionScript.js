var category_num_completed = {
	"location":0,
	"activities":0,
	"community":0,
	"costs":0,
	"health":0
};

var ratings = {
	"location":0,
	"community":0,
	"activities":0,
	"health":0,
	"costs":0
};
var categories = {
	"location": [
		{
			"question": "My perfect weather...",
			"answers": ["is warm year-round, with as little rain as possible","is warm year-round, but I don't mind some showers","includes all 4 seasons, with maybe SOME snow","definitely has some snow"],
			"results": [false,false,false,false],

		},
		{
			"question": "Close your eyes and picture your ideal day. You are...",
			"answers": ["spending some time on the beach","hitting the slopes","going for a hike in the woods","shopping/relaxing at home with a book"],
			"results": [false,false,false,false],

		},
		{
			"question": "My ideal location is...",
			"answers": ["A Quaint Town (Think Little House on the Prairie)","A Big Town (Think Myrtle Beach)","A Small City (Think Sarasota)","A Big City (Think Dallas)"],
			"results":[false,false,false,false],

		}
	],
	"activities": [
		{
			"question": "Golf...",
			"answers": ["is the love of my life (besides my spouse of course)","is fun every now and then","doesn't interest me"],
			"results":[false,false,false,false],

		},
		{
			"question": "When it comes to historical sites and museums,",
			"answers": ["I love them both","the history is great, but I can do without the museums","an occasional day at the museum is always enriching","I haven't been to one since my 5th grade field trip"],
			"results":[false,false,false,false],

		},
		{
			"question": "When it comes to food, I like to,",
			"answers": ["Try as many restaurants as possible, I'm a bit of a foodie","Find a few favorite restaurants and stick to them","Forget restaurants-I'm a takeout/fast food person","I don't go out to eat often"],
			"results":[false,false,false,false],

		},
		{
			"question": "In my new location I will,",
			"answers": ["Work full time - have to pay the bills!","Work part time - got to stay busy","Forget work - I'm ready to relax"],
			"results":[false,false,false,false],

		}
	],
	"community": [
		{
			"question": "I prefer to get to work or around the community by..",
			"answers": ["Walking","Car","Public Transit","Taxi/Bike/Motorcycle/Other"],
			"results": [false,false,false,false],

		},
		{
			"question": "The culture of a college town...",
			"answers": ["sounds appealing","doesn't really interest me","I don't care either way"],
			"results":[false,false,false,false],

		},
		{
			"question": "My ideal community (select all that apply)..",
			"answers": ["Has a lot of young people","Is very volunteer focused","Is higher income","Is physically active"],
			"results": [false,false,false,false],

		},
		{
			"question": "I prefer to be with people in the following age range..",
			"answers": ["Early retirees","Retirement aged","Late retirees","Mix of families and retirees"],
			"results":[false,false,false,false],

		},
		{
			"question": "I expect to travel...",
			"answers": ["all over the world","a lot, but mostly domestic","a little, but expect a lot of visitors","none - why would I leave my perfect new home?"],
			"results":[false,false,false,false],

		}
	],
	"costs": [
		{
			"question": "I plan on buying a home...",
			"answers": ["cheap - my money is best spent elsewhere","average priced","I don't mind splurging - it's my retirement dream home for crying out loud!","I plan on renting, so this doesn't apply to me."],
			"results":[false,false,false,false],

		},
		{
			"question": "When it comes to taxes...",
			"answers": ["I would sacrifice quality of life for the lowest taxes possible","Taxes are inevitable, but I would like to keep them low","I can deal with an average amount of taxes","Completely worth it for the right location"],
			"results":[false,false,false,false],

		},
		{
			"question": "My living costs during retirement...",
			"answers": ["are not a concern","are somewhat important","are something I need to keep a close eye on","are a top priority - I'm on a tight budget"],
			"results":[false,false,false,false],

		}
	],
	"health": [
		{
			"question": "The quality of the clinical care...",
			"answers": ["needs to be the best","should be better than the average","average quality of care is just fine","doesn't matter to me, I don't go to the doctor often"],
			"results":[false,false,false,false],

		},
		{
			"question": "The cost of assisted living in the area should be...",
			"answers": ["a good value","about average","irrelevant - I'll pay whatever it takes for the best","haven't thought about that just yet"],
			"results":[false,false,false,false],

		},
		{
			"question": "The local nursing homes...",
			"answers": ["Need to be the best in the business","Need to be strong, but not the best","Should be a good value","Nursing Home? Not even on my radar yet"],
			"results":[false,false,false,false],

		}
	]
}