import Questions from "../models/questionSchema.js";
import Result from "../models/resultSchema.js";
import questions, {answers} from '../database/data.js'


export async function getQuestions(req, res) {
  try {
    const q = await Questions.find().lean();
    res.json(q);
  } catch (error) {
    console.error("Error in getQuestions:", error);
    res.json({ error: error.message });
  }
}

export async function insertQuestions(req, res) {
  try {
    await Questions.insertMany([{ questions: questions, answers: answers }]);
    res.json({ msg: "Data saved successfully" });
  } catch (error) {
    console.error("Error in insertQuestions:", error);
    res.json({ error: error.message });
  }
}

export async function dropQuestions(req, res) {
  try {
    await Questions.deleteMany({}); // Pass an empty object as the filter
    res.json("All questions deleted");
  } catch (error) {
    console.error("Error in dropQuestions:", error);
    res.json({ error: error.message });
  }
}

export async function getResult(req, res) {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    console.error("Error in getResult:", error);
    res.json({ error: error.message });
  }
}

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error('Data Not Provided...!');

    await Result.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    console.error("Error in storeResult:", error);
    res.json({ error: error.message });
  }
}

export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    console.error("Error in dropResult:", error);
    res.json({ error: error.message });
  }
}


/**export async function getQuestions(req, res) {
    try {
      const q = await Questions.find().lean();
      res.json(q);
    } catch (error) {
      console.error("Error in getQuestions:", error);
      res.json({ error: error.message });
    }
  }
  

  export async function insertQuestions(req, res) {
    try {
      await Questions.insertMany([{ questions: questions, answers: answers }]);
      res.json({ msg: "Data saved successfully" });
    } catch (error) {
      console.error("Error in insertQuestions:", error);
      res.json({ error: error.message });
    }
  }
  

  export async function dropQuestions(req, res) {
    try {
        await Questions.deleteMany({}); // Pass an empty object as the filter
        res.json("All questions deleted");
    } catch (error) {
        console.error("Error in dropQuestions:", error);
        res.json({ error: error.message });
    }
}




export async function getResult(req, res) {
  try {
    const results = await Result.find();
    res.json(results);
  } catch (error) {
    console.error("Error in getResult:", error);
    res.json({ error: error.message });
  }
}

import Result from "../models/resultSchema.js";

export async function storeResult(req, res) {
  try {
    const { username, result, attempts, points, achieved } = req.body;
    if (!username && !result) throw new Error('Data Not Provided...!');

    await Result.create({ username, result, attempts, points, achieved });
    res.json({ msg: "Result Saved Successfully...!" });
  } catch (error) {
    console.error("Error in storeResult:", error);
    res.json({ error: error.message });
  }
}



export async function dropResult(req, res) {
  try {
    await Result.deleteMany();
    res.json({ msg: "Result Deleted Successfully...!" });
  } catch (error) {
    console.error("Error in dropResult:", error);
    res.json({ error: error.message });
  }
}*/