import httpService from "./httpService";

export async function getClasses(competitionId) {
  const classesFromServer = await httpService.get(
    "?method=getclasses&comp=" + competitionId
  );
  let newClasses = [{ name: "Classes" }];

  classesFromServer.data.classes.map(c =>
    newClasses.push({ name: c.className })
  );
  return newClasses;
}

export async function getClassResult(competitionId, className) {
  const classResults = await httpService.get(
    `?comp=${competitionId}&method=getclassresults&unformattedTimes=false&class=${className}` //Conection string. Read API docs for information --> https://liveresults.github.io/documentation/api.html
  );

  const results = { ...classResults.data };

  return results;
}
