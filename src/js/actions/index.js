import { ADD_ARTICLES } from '../constants/index'

export function addArticles(payload)
{
	return { type: "ADD_ARTICLES" ,payload : payload }
}