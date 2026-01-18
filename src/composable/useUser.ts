import axios from "./useAxios";
import { ModelRequestModel } from "@/model/movieModel";

const apiKey = "67eee5889c42f438e0119ff57348675d";

const MAX_PAGE_SIZE = 10;

export function useUser() {
  const fetchMovieList = async (
    params?: ModelRequestModel,
  ): Promise<any | false> => {
    try {
      //TODO 전체 목록 , 총 116,750건을1,168번 호출해야되느넫 문제잇을수있어서 5건식나눠서 불러오고 어딘가 저장해놔야함.
      // git action으로 크론탭같은거 만들수잇음
      params ??= {};
      params.curPage ??= 1;

      const response = await axios.get(
        "http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieList.json",
        {
          params: {
            key: apiKey,
            curPage: params.curPage,
            itemPerPage: MAX_PAGE_SIZE,
          },
        },
      );
      return response;
    } catch (err) {
      return false;
    }
  };

  return {
    fetchMovieList,
  };
}
