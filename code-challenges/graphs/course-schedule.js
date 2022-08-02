// Course Schedule

function canFinishCourses(numCourses, prereqs) {
	const prereqMap = {};
	// create adj list
	for (let course in prereqs) {
		prereqMap[course] = [];
    }
    for (let course in prereqs) {
	prereqMap[course[0]].push(course[1]);
    }
    // track visited nodes/courses
    const visitSet = new Set();

    function dfs(course) {
	    if (visitSet.has(course)) return false;
	    if (prereqMap[course] === []) return true;

	    visitSet.add(course);
	    // loop through prereqs for course
	    for (let prereq in prereqMap[course]) {
	        if (!dfs(prereq)) return false;  
        }
        visitSet.remove(course);
        prereqMap[course] = [];  // mark as completed
        return true;
    }
	// check for isolated courses eg if input is like: [1, 2], [3, 4]
	for (let course = 0; course < numCourses; course++) {
	    if (!dfs(course)) return false;
    }
    return true;
};
