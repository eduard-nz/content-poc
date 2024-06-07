interface Node {
    type: string;
    name?: string;
    children?: Node[];
    props?: { [key: string]: any };
    content?: any;
  }
 

  export async function loadReferencedContent(node: Node, nodeName: string, getContent: (reference: string) => Promise<any>) {
    if (node.type === "mdxJsxFlowElement" && node.name === nodeName) {
      const block = node.props?.block;
      if (block) {
        const resolvedContent =  await getContent(block);
        node.props = {...node.props, content: resolvedContent.content};
      }
    }
    if (node.children) {
      for (const child of node.children) {
        await loadReferencedContent(child, nodeName, getContent);
      }
    }
  }
  