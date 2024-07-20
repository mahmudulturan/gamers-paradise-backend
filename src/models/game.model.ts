import mongoose, { model } from "mongoose";
import { IGame } from "../types/types";

const gameSchema = new mongoose.Schema<IGame>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    items: {type: [mongoose.Schema.ObjectId], ref: "Item"}
}, {
    timestamps: true
})

const Game = model("Game", gameSchema);

export default Game;