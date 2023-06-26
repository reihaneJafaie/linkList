class Node {
   constructor(data) {
      data = data;
      link = null;
   }
}

class List {
   constructor() {
      first = null;
   }

   insert_to_head(data) {
      let newnode = new Node(data);
      if (first == null) {
         first = newnode;
      } else {
         let varfirst = first;
         let varnewnode = newnode;

         newnode.link = varfirst;
         first = varnewnode;
      }
   }

   insert_to_tail(newdata) {
      let newnode = new Node(newdata);
      if (first == null) {
         first = newnode;
      } else {
         let q = first;

         while (q.link != null) {
            q = q.link;
         }

         q.link = newnode;
      }
   }

   printlist() {
      if (first == null) {
         console.log("there's nothing to print");
      } else {
         let currentnode = first;
         while (currentnode != null) {
            console.log(currentnode.data + " -> ");
            currentnode = currentnode.link;
         }
      }
   }

   Delete_Multiples_x(x) {
      let q = first;
      let newnode = first.link;
      while (newnode != null) {
         if (newnode.data == x || newnode.data % x == 0) {
            q.link = newnode.link;
         } else {
            q = newnode;
         }
         newnode = newnode.link;
      }
   }

}

class Stack {
   constructor() {
      top = null;
   }

   push(x) {
      let newnode = new Node(x);
      newnode.link = top;
      top = newnode;
   }

   pop() {
      if (top != null) {
         let x = top.data;
         let newnode = top;
         top = top.link;
         return x;
      } else {
         console.log("stack is empty");
      }
   }
}