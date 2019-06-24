export const ACTION_{{constants}} = "ACTION_{{constants}}";

export const create{{pascal}}Action = () => {
  return {
    type: ACTION_{{constants}}
  };
};

class {{pascal}}State {}
interface AnyAction{type: string;}

export const {{pascal}}Reducer = (state: {{pascal}}State, action: AnyAction) => {
  switch(action.type){
    case ACTION_{{constants}}:
      return state;
  }
};
