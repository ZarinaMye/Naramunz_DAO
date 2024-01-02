import './Create.css';

export function Create() {
   return (
       <div>
           <h1>Give a proposal</h1>
              <h2>Title</h2>
                <input type="text" name="title" />
                <h2>Description</h2>
                <input type="text" name="description" />
                <btn>Submitt</btn>
       </div>
   );
};