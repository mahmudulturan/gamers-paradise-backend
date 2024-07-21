import mongoose, { model } from "mongoose";
import { ICategory, IGame } from "../interfaces/game.interface";

const categorySchema = new mongoose.Schema<ICategory>({
    name: {
        type: String,
        required: true
    },
    items: {
        type: [mongoose.Schema.ObjectId], ref: "Item"
    }
}, { _id: false })

const gameSchema = new mongoose.Schema<IGame>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    categories: { type: [categorySchema], required: true },
    description: { type: String, required: true },
    isDeleted: { type: Boolean, default: false }
}, {
    timestamps: true
})

const Game = model("Game", gameSchema);

export default Game;