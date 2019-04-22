import React, { Component } from "react";
import "./App.css";
import axios, { CancelTokenSource } from "axios";

interface IPost {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

const defaultPosts: IPost[] = [];

export const AxiosFunction: React.FC = () => {
  const [posts, setPosts]: [IPost[], (posts: IPost[]) => void] = React.useState(defaultPosts);
  const [error, setError]: [string, (error: string) => void] = React.useState("");
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState(false);
  const cancelToken = axios.CancelToken;
  const [cancelTokenSource, setCancelTokenSource]: [CancelTokenSource, (cancelSourceToken: CancelTokenSource) => void] = React.useState(cancelToken.source());
};
